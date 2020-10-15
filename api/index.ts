const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { MongoClient, ObjectId } = require('mongodb');

// Grab Dotenv config
dotenv.config();

const start = async () => {

	try{
		// Setup DB Connections
		const MONGO_URL = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_NAME}`
    	const connection = await MongoClient.connect(MONGO_URL, { useUnifiedTopology: true } );
		const db = connection.db('keep');
		const Notes = db.collection('notes');

		// Setup Express App + Middleware
		const app = express();
		app.use(cors({
			origin: 'http://localhost:3000'
		}));
		app.use(bodyParser.json());
		app.use((req, res, next) =>{
			let date = new Date().toString();
			console.log(`☑️  ${date}: ${req.method} ${req.url}`);
			next();
		})

		const typeDefs = [`

			type Query {
				note(_id: String): Note
				notes: [Note]
			}

			type Note {
				_id: String
				title: String
				content: String
				colour: String
				favourite: Boolean
				created: String
				updated: String 
			}

			type Message {
				message: String
			}

			type Mutation {
				createNote(title: String, content: String): Note
				removeNote(_id: String): Message
			}

			schema {
				query: Query
				mutation: Mutation
			}
		`];

		const resolvers = {
			Query: {
				note: async (root, {_id}) => {
					return await (Notes.findOne(ObjectId(_id)));
				},
				notes: async () => {
					return await Notes.find({}).toArray()
				}
			},
			Mutation: {
				createNote: async (root, args, context, info) => {
					try{
						const res = await Notes.insertOne(args)
						return res.ops[0]
					}
					catch(error){
						console.error('error', error)
						return {
							_id: "null",
							title: "null",
							content: "null"
						}
					}
					
				},
				removeNote: async (root, args) => {
					try{
						const res = await Notes.deleteOne({_id : ObjectId(args._id)})

						if(res.deletedCount === 0){
							throw new Error('No note with id was found to be deleted.');
						}

						return { message: `${args._id} was successfully removed.`}
					}
					catch(error){
						console.error('error', error)
						return { message: `Could not remove note ${args._id}.`}
					}
				},
			},
		}

		// Setting up ApolloServer and linking with Express
		const server = new ApolloServer({
			typeDefs,
			resolvers,
			cors: cors({
				origin: 'http://localhost:3000'
			}),
		});


		server.applyMiddleware({ app, path: '/graphql' });

		app.use('/', ( req, res ) => {
			res.status(200).send({"content": "Hello World"})
		})
	
		app.listen(process.env.SERVER_PORT, () => {
			console.log(`🚀  Server ready at http://localhost:${process.env.SERVER_PORT}`)
		})

	}
	catch(error){
		console.error('💥 Server failed to start!');
		console.error(error);
	}

}

start();
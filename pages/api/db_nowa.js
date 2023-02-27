const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
// mengambil data dari collection mahasiswa
async function getWeing(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let nowa = await db
      .collection('nowa')
      .find({})
      .sort({})
      .toArray();
    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(nowa)),
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
async function deleteWeing(req, res) {
  var ObjectId = require('mongodb').ObjectId;
  const { _id } = req.body;
  const convertedObjectId = new ObjectId(_id);
  try {
    // Connecting to the database
    let { db } = await connectToDatabase();
    // Deleting the post

    await db.collection('nowa').deleteOne({
      '_id': convertedObjectId
    });
    // returning a message
    return res.json({
      message: 'Post deleted successfully',
      success: true,
    });
  } catch (error) {
    // returning an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};

// menambah data kedalam collection mahasiswa
async function addWeding(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post
    await db.collection('nowa').insertOne(JSON.parse(req.body));
    // return a message
    return res.json({
      message: 'Data nowa Telah di Tambahkan',
      success: true,
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
async function updateMenu(req, res) {
  const { waweding,
    wastudiutama,
    waselfstudio,
    waundangan,
    watenda,
    wakost,
    objectId, } = req.body
  var ObjectId = require('mongodb').ObjectId;
  const convertedObjectId = new ObjectId(objectId);
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // update the published status of the post
    await db.collection('nowa').updateOne(
      {
        '_id': convertedObjectId
      },
      {
        $set: {
          'waweding': waweding,
          'wastudiutama': wastudiutama,
          'waselfstudio': waselfstudio,
          'waundangan': waundangan,
          'watenda': watenda,
          'wakost': wakost,
        }
      }
    );
    // return a message
    return res.json({
      message: 'Post updated successfully',
      success: true,
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
// CRUD handler
export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getWeing(req, res);
    }
    case 'POST': {
      return addWeding(req, res);
    }
    case 'DELETE': {
      return deleteWeing(req, res);
    }
    case 'PUT': {
      return updateMenu(req, res);
    }
  }
}
/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("192lab1x2r83v19")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "opfnk7zq",
    "name": "agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "0i9hzgujk9prnj8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("192lab1x2r83v19")

  // remove
  collection.schema.removeField("opfnk7zq")

  return dao.saveCollection(collection)
})

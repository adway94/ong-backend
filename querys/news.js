const db = require("../models");
const Entry = db.Entry;
const consts = require("../constant/const");

exports.getEntry = async (entryId) => {
  try {
    const entry = await Entry.findAll({
      where: { id: entryId, type: "news" },
    });
    return entry;
  } catch (error) {
    console.log(error);
  }
};

exports.getTypeNews = async (typeNews) => {
  try {
    const news = await Entry.findAll({
      where: { type: typeNews },
      attributes: ["id", "name", "image", "content", "createdAt"],
    });
    return news;
  } catch (error) {
    console.log(error);
  }
};

exports.updateEntry = async (news, newsId) => {
  try {
    const updateNews = await Entry.update(news, { where: { id: newsId } });
    if (updateNews != consts.UPDATE_SUCCESS) {
      return await Entry.findAll({ where: { id: newsId } });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.createEntry = async (news) => {
  try {
    const newNews = await Entry.create(news);
    return newNews;
  } catch (error) {
    console.log(error);
  }
};

exports.deleteNews = async (id) => {
  try {
    return await Entry.destroy({ where: { id, type: "news" } });
  } catch (error) {
    console.log(error);
  }
};

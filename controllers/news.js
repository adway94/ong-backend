const newsQuery = require("../querys/news");
var consts = require("../constant/const");
const updateEntry = require("../querys/news");
const uploadImage = require("../services/aws/s3UploadImage");

exports.getNews = (req, res, next) => {
  newsQuery
    .getTypeNews("news")
    .then((org) => {
      res.status(consts.code_success).send(org);
    })
    .catch((err) =>
      res.status(consts.code_failure).send({ message: err.message })
    );
};

exports.getNewsById = (req, res, next) => {
  const entryId = req.params.id;
  newsQuery
    .getEntry(entryId)
    .then((dataEntry) => {
      if (dataEntry.length === consts.ARRAY_ENPTY) {
        res.status(consts.code_success).send({
          message: consts.MESSAGE_NOT_FOUND,
        });
      } else {
        res.status(consts.code_success).send(dataEntry);
      }
    })
    .catch((err) =>
      res.status(consts.code_failure).send({ message: err.message })
    );
};

exports.updateNews = (req, res) => {
  if (!req.params.id) {
    res
      .status(consts.FORBIDDEN_ACTION_CODE)
      .send({ error: consts.NOT_FOUND_USER });
  } else {
    const news = {
      name: req.body.name,
      content: req.body.content,
      categoryId: req.body.categoryId,
    };
    if (typeof req.body.image === typeof consts.STRING_TYPE) {
      news["image"] = req.body.image;
      newsQuery
        .updateEntry(news, req.params.id)
        .then((dataNews) => {
          if (dataNews.length == consts.ARRAY_ENPTY) {
            throw new Error(consts.NOT_FOUND_USER);
          }
          res.status(consts.code_success).json(dataNews);
        })
        .catch((err) => {
          res.status(consts.code_failure).send({ Error: err.message });
        });
    } else {
      uploadImage(req, (img) => {
        news["image"] = img;
        newsQuery
          .updateEntry(news, req.params.id)
          .then((dataNews) => {
            if (dataNews.length == consts.ARRAY_ENPTY) {
              throw new Error(consts.NOT_FOUND_USER);
            }
            res.status(consts.code_success).json(dataNews);
          })
          .catch((err) => {
            res.status(consts.code_failure).send({ Error: err.message });
          });
      });
    }
  }
};

exports.createNews = (req, res) => {
  if (!req.body.name || !req.body.content || !req.body.categoryId) {
    res
      .status(consts.FORBIDDEN_ACTION_CODE)
      .send({ error: consts.MISING_FIELDS });
  } else {
    const news = {
      name: req.body.name,
      content: req.body.content,
      categoryId: req.body.categoryId,
      type: consts.TYPE_NEWS,
    };
    if (typeof req.body.image === typeof consts.STRING_TYPE) {
      news["image"] = "";
      newsQuery
        .createEntry(news, req.params.id)
        .then((dataNews) => {
          if (dataNews.length == consts.ARRAY_ENPTY) {
            throw new Error(consts.NOT_FOUND_USER);
          }
          res.status(consts.code_success).json(dataNews);
        })
        .catch((err) => {
          res.status(consts.code_failure).send({ Error: err.message });
        });
    } else {
      uploadImage(req, (img) => {
        news["image"] = img;
        newsQuery
          .createEntry(news, req.params.id)
          .then((dataNews) => {
            if (dataNews.length == consts.ARRAY_ENPTY) {
              throw new Error(consts.NOT_FOUND_USER);
            }
            res.status(consts.code_success).json(dataNews);
          })
          .catch((err) => {
            res.status(consts.code_failure).send({ Error: err.message });
          });
      });
    }
  }
};

exports.deleteNewById = async (req, res, next) => {
  const { id } = req.params;
  const entry = await newsQuery.deleteNews(id);
  if (entry) {
    res.json({
      message: consts.DELETED_NEWS,
    });
  } else {
    res.status(consts.code_failure).json({
      message: `${consts.ERROR_DELETED_NEWS} ${id}`,
    });
  }
};

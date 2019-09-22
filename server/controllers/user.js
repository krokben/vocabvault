const User = require("../models/user");

//Simple version, without validation or sanitation
exports.all = (req, res) => {
  User.findOne({ user: req.params.user }, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (user) {
      res.status(200).send(user.words);
      return;
    }
    return res.status(404).send("Could not find user");
  });
};

exports.add = (req, res) => {
  User.findOne({ user: req.params.user }, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (user && req.body.word) {
      User.updateOne(
        { user: req.params.user },
        {
          $push: { words: req.body.word }
        },
        err => {
          if (err) {
            return res.status(500).send(err);
          }
        }
      );
      return res.status(200).send("Word added!");
    } else if (user) {
      return res.status(500).send("User already exists!");
    }

    if (!user) {
      const newUser = new User({ user: req.params.user, words: [] });

      newUser.save(err => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send("User created!");
      });
    }
  });
};

exports.delete = (req, res) => {
  User.updateOne(
    { user: req.params.user, "words.content": req.body.word },
    {
      $unset: { "words.$.content": req.body.word }
    },
    err => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send("Word removed.");
    }
  );
};

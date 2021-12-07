const mongoose = require("mongoose");
const Anime = mongoose.model("Anime");

exports.findAll = function (req, res) {
  Anime.find({}, function (err, results) {
    return res.send(results);
  });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  Anime.findOne({ _id: id }, (err, json) => {
    if (err) return console.log(err);
    return res.send(json);
  });
};

exports.add = function (req, res) {
  Anime.create(req.body, function (err, anime) {
    if (err) return console.log(err);
    return res.send(anime);
  });
};

exports.update = function (req, res) {
  console.log(req.body);
  const id = req.params.id;
  Anime.findByIdAndUpdate(id, req.body, { new: true }, (err, response) => {
    if (err) return console.log(err);
    res.send(response);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  Anime.deleteOne({ _id: id }, () => {
    return res.sendStatus(202);
  });
};

exports.upload = function (req, res) {
  console.log(req.files);
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let file = req.files.file;
  file.mv(`./public/img/${req.body.filename}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ file: `public/img/${req.body.filename}` });
    console.log(" res.json", res.json);
  });
};

exports.import = function (req, res) {
  Anime.create(
    {
      title: "Death Note",
      description:
        "Death Note (stylized as DEATH NOTE) is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the Death Note, which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.",
      image: "DeathNote.png",
      year: "2015",
    },
    {
      title: "Air Gear",
      description:
        'Air Gear revolves around the life of Itsuki Minami "Ikki or Crow", also known as "Baby Face", "Lil (and Little) Crow", and his friends. The story follows their use of Air Gear, an in-universe invention derived from inline skates. Initial sections of the plot carries out the introduction of characters that eventually join Ikki. As the story progresses, it focuses on their roles as Storm Riders and their quest to be on the top of the Trophaeum Tower. The pinnacle that all Storm Riders hope to reach.',
      image: "AirGear.png",
      year: "2016",
    },

    {
      title: "Naruto",
      description:
        "Naruto (Japanese: NARUTOナルト) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts – the first set in Naruto's pre-teen years, and the second in his teens.",
      image: "Naruto.png",
      year: "1999",
    },

    {
      title: "Demon Slayer",
      description:
        "Demon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba, Blade of Demon Destruction[4]) is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.",
      image: "DemonSlayer.png",
      year: "2016",
    },
    function (err) {
      if (err) return console.log(err);
      return res.sendStatus(201);
    }
  );
};

exports.killall = function (req, res) {
  Anime.deleteMany({}, (err) => {
    if (err) return console.log(err);
    return res.sendStatus(202);
  });
};

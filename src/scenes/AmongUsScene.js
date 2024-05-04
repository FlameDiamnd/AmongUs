import Phaser from "phaser";
import maps from "../../public/images/Maps.png";
import playerRed from "../../public/images/Red.png";
import playerCyan from "../../public/images/Cyan.png";
import playerGreen from "../../public/images/Green.png";
import playerPink from "../../public/images/Pink.png";
import playerOrange from "../../public/images/Orange.png";
export default class AmongUsScene extends Phaser.Scene {
  constructor() {
    super("among-us-scene");
    //menginisialisasikan Scene yang dibuat, sehingga dapat dipanggil kembali saat dibutuhkan.
  }

  //menginisialisasikan properti yang dibutuhkan dalam game
  preload() {
    this.load.image("maps", maps);
    this.load.image("playerRed", playerRed);
    this.load.image("playerCyan", playerCyan);
    this.load.image("playerGreen", playerGreen);
    this.load.image("playerPink", playerPink);
    this.load.image("playerOrange", playerOrange); //memuat semua game assets yang dibutuhkan pada game.
  }

  create() {
    this.add.image(960, 540, "maps"); //Membuat  semua game objek dan rule yang dibutuhkan.
    this.add.image(1000, 400, "playerRed");
    this.add.image(920, 680, "playerCyan").setScale(0.5);
    this.add.image(1780, 400, "playerGreen");
    this.add.image(320, 222, "playerPink");
    this.add.image(320, 640, "playerOrange");
  }

  update() {
    //Merekam semua perubahan yang terjadi pada Scene selama game berlangsung, jadi method ini dijalankan terus menerus.
  }
}

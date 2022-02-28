const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `
┏━━━ꕥ〔 *${setting.botName}* 〕ꕥ━⬣
┃✾ _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
┃
┃✾ Library : *Baileys-MD*.
┃✾ Prefix : ( ${prefix} )
┃✾ Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
┃✾ Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
┗━ꕥ  
┏━━━━⬣
┃✾ Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
┃✾Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃✾ Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
┃✾ Balance : $${toCommas(getBalance(sender, balance))}
┃✾ Note : Bot Masih Dalam Perbaikan
┃✾ _Ada Bug? Ketik ${prefix}report Bug mu_
┗━ꕥ 
  ${readmore}
┏━➤ *MENU YUI-CHAN MD*
┃┏━➤ *( 📍 )  Main Menu*
┃┃ ≻ ${prefix}menu
┃┃ ≻ ${prefix}owner
┃┃ ≻ ${prefix}donasi
┃┃ ≻ ${prefix}speed
┃┃ ≻ ${prefix}runtime
┃┃ ≻ ${prefix}cekprem
┃┃ ≻ ${prefix}listprem
┃┃ ≻ ${prefix}jo <Text>
┃┃ ≻ ${prefix}simi <Text>
┃┗━━━━━━━━*
┃┏━➤   *( ✏️ )  Converter/Tools*
┃┃≻ ${prefix}stiker <Caption>
┃┃≻ ${prefix}toimg <ReplyStiker>
┃┃≻ ${prefix}tovid <ReplyStiker>
┃┗━━━━━━━━*
┃┏━➤   *( ⌛ )  Downloader*
┃┃ ≻ ${prefix}play <Querry>
┃┃ ≻ ${prefix}tiktok <LinkTt>
┃┃ ≻ ${prefix}tiktokaudio <LinkTt>
┃┃ ≻ ${prefix}ytmp4 <LinkYt>
┃┃ ≻ ${prefix}ytmp3 <LinkYt>
┃┃ ≻ ${prefix}getvideo
┃┃ ≻ ${prefix}getmusic
┃┃ ≻ ${prefix}instagram <LinkIg>
┃┃ ≻ ${prefix}facebook <LinkFb>
┃┗━━━━━━━━*
┃┏━➤   *( ♻️ )  Random Menu*
┃┃ ≻ ${prefix}quote
┃┃ ≻ ${prefix}cecan
┃┃ ≻ ${prefix}cogan
┃┃ ≻ ${prefix}naruto
┃┃ ≻ ${prefix}loli
┃┃ ≻ ${prefix}waifu
┃┃ ≻ ${prefix}husbu
┃┃ ≻ ${prefix}yaoi
┃┗━━━━━━━━*
┃┏━➤  *( 🎨 )  Menu Maker*
┃┃ ≻ ${prefix}glitch <Text> <Text>
┃┃ ≻ ${prefix}flaming <Text>
┃┃ ≻ ${prefix}shadow <Text>
┃┃ ≻ ${prefix}wolftext <Text>
┃┃ ≻ ${prefix}cup <Text>
┃┃ ≻ ${prefix}cup2 <Text>
┃┃ ≻ ${prefix}romantic <Text>
┃┃ ≻ ${prefix}writetext <Text>
┃┃ ≻ ${prefix}lovetext <Text>
┃┃ ≻ ${prefix}lovetext2 <Text>
┃┃ ≻ ${prefix}undergrass <Text>
┃┃ ≻ ${prefix}coffecup <Text>
┃┃ ≻ ${prefix}woodheart <Text>
┃┃ ≻ ${prefix}tahta <Text>
┃┃ ≻ ${prefix}waifumaker <Text>
┃┃ ≻ ${prefix}lolimaker <Text>
┃┃ ≻ ${prefix}kanekimaker <Text>
┃┃ ≻ ${prefix}guramaker <Text>
┃┃ ≻ ${prefix}leaves <Text>
┃┃ ≻ ${prefix}pornhub <Text>
┃┃ ≻ ${prefix}3d <Text>
┃┃ ≻ ${prefix}christmas <Text>
┃┃ ≻ ${prefix}logowolf <Text>
┃┃ ≻ ${prefix}logowolf2 <Text>
┃┗━━━━━━━━*
┃┏━➤   *( 🌷 )  Menu Lain Nya*
┃┃ ≻ ${prefix}shortlink <Link>
┃┃ ≻ ${prefix}ssweb <Link>
┃┃ ≻ ${prefix}ssdesktop <Link>
┃┃ ≻ ${prefix}sshpfull <Link>
┃┃ ≻ ${prefix}kbbi <Kata>
┃┃ ≻ ${prefix}faktaunik
┃┃ ≻ ${prefix}darkjokes
┃┃ ≻ ${prefix}covid19
┃┃ ≻ ${prefix}cerpen
┃┃ ≻ ${prefix}cersex
┃┃ ≻ ${prefix}wiki <Query>
┃┃ ≻ ${prefix}igstalk <Username>
┃┃ ≻ ${prefix}say <Text>
┃┃ ≻ ${prefix}qr <Text>
┃┃ ≻ ${prefix}readmore <Text>|<Text>
┃┃ ≻ ${prefix}hitungmundur 12 10 2022
┃┗━━━━━━━━*
┃┏━➤   *( ☪️ )  Islamic Menu*
┃┃ ≻ ${prefix}quran <nomer>
┃┃ ≻ ${prefix}quranaudio <surah> <ayat>
┃┃ ≻ ${prefix}listquran <nomer>
┃┃ ≻ ${prefix}kisahnabi <Nama Nabi>
┃┗━━━━━━━━*
┃┏━➤   *( ✍️ )  Menu Tulis*
┃┃ ≻ ${prefix}nuliskanan <Text>
┃┃ ≻ ${prefix}nuliskiri <Text>
┃┃ ≻ ${prefix}foliokanan <Text>
┃┃ ≻ ${prefix}foliokiri <Text>
┃┗━━━━━━━━*
┃┏━➤   *( 🔎 )  Search Menu*
┃┃ ≻ ${prefix}lirik <Judul>
┃┃ ≻ ${prefix}grupwa <Pencarian>
┃┃ ≻ ${prefix}ytsearch <Pencarian>
┃┃ ≻ ${prefix}pinterest <Querry>
┃┗━━━━━━━━*
┃┏━➤   *( 🎮 )  Game & Fun Menu*
┃┃ ≻ ${prefix}tictactoe @tag
┃┃ ≻ ${prefix}delttc
┃┃ ≻ ${prefix}suit
┃┃ ≻ ${prefix}slot
┃┃ ≻ ${prefix}tebakgambar
┃┃ ≻ ${prefix}apakah <Query>
┃┃ ≻ ${prefix}kapankah <Query>
┃┃ ≻ ${prefix}rate <Query>
┃┃ ≻ ${prefix}gantecek <Nama>
┃┃ ≻ ${prefix}cantikcek <Nama>
┃┃ ≻ ${prefix}sangecek <Nama>
┃┃ ≻ ${prefix}gaycek <Nama>
┃┃ ≻ ${prefix}lesbicek <Nama>
┃┃ ≻ ${prefix}gimana <Query>
┃┃ ≻ ${prefix}bisakah <Query>
┃┃ ≻ ${prefix}cekme
┃┗━━━━━━━━*
┃┏━➤    *( 🏦 )  Payment & Bank*
┃┃ ≻ ${prefix}buylimit <Jumlah>
┃┃ ≻ ${prefix}buyglimit <Jumlah>
┃┃ ≻ ${prefix}transfer @tag <jumlah>
┃┃ ≻ ${prefix}limit
┃┃ ≻ ${prefix}balance
┃┃ ≻ ${prefix}topbalance
┃┗━━━━━━━━*
┃┏━➤   *( 👥 )  Group Menu*
┃┃ ≻ ${prefix}linkgrup
┃┃ ≻ ${prefix}setppgrup
┃┃ ≻ ${prefix}setnamegc
┃┃ ≻ ${prefix}setdesc
┃┃ ≻ ${prefix}group <Open/Close>
┃┃ ≻ ${prefix}revoke
┃┃ ≻ ${prefix}hidetag <Text>
┃┃ ≻ ${prefix}kick <@tag>
┃┃ ≻ ${prefix}add <@tag>
┃┗━━━━━━━━*
┃┏━➤   *OWNER MENU*
┃┃ > evalcode
┃┃  x evalcode-2
┃┃  $ executor
┃┃ ≻ ${prefix}setppbot
┃┃ ≻ ${prefix}exif
┃┃ ≻ ${prefix}leave
┃┃ ≻ ${prefix}addprem
┃┃ ≻ ${prefix}delprem
┃┗━━━━━━━━*
┃◗ Thanks To Allah S.W.T*
┃◗ Thanks To Ortu*
┃◗ Thanks To LeonGanz*
┃◗ Thanks To Putri Azizah*
┃◗ Thanks To All Subscriberku*
┗━━━━━━━ •*`
}

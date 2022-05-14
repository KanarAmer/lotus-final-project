import Avatar from "@mui/material/Avatar"

// reminder content
export type reminderContent__type = {
  _id: string,
  name: string,
  Docname:string,
  content:string,
  DoC: number
}
export const reminderContent: reminderContent__type[] = [
  {
    _id: 'a00001',
    name: 'Trimister Review',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'a00002',
    name: 'Trimister Review',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'a00004',
    name: 'inspection-a4',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'a00008',
    name: 'inspection-a8',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'a000016',
    name: 'inspection-a16',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'a000032',
    name: 'inspection-a32',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'a000064',
    name: 'inspection-a64',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'b00002',
    name: 'inspection-b2',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'b00004',
    name: 'inspection-b4',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'b00008',
    name: 'inspection-b8',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'b000016',
    name: 'inspection-b16',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'b000032',
    name: 'inspection-b32',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'b000064',
    name: 'inspection-b64',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'b000128',
    name: 'inspection-b128',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
  {
    _id: 'b000256',
    name: 'inspection-b256',
    Docname: 'Mark Markous',
    content:'First trimester review at Ziv hospital on October 13 2021',
    DoC: new Date().getTime(),
  },
]


// reminder content
export type articlesContent__type = {
  _id: string,
  title: string,
  content: string,
  DoC: number
}
export const articlesContent: articlesContent__type[] = [
  {
    _id: 'a00001',
    title: 'Healthy Pregnancy',
    content: "Learn what you can do before and during pregnancy to improve your chances of having a healthy baby.",
    DoC: new Date().getTime(),
  },
  {
    _id: 'a00002',
    title: 'Folic Acid Helps Prevent Some Birth Defects',
    content: "Learn how to get healthy before and during pregnancy to increase your chances of having a healthy baby. Plan ahead by getting 400 micrograms (mcg) of folic acid each day.",
    DoC: new Date().getTime(),
  },
  {
    _id: 'a00004',
    title: 'Pregnant? Don’t Smoke!',
    content: "Quitting smoking is one of the best ways a woman can protect herself and her baby’s health.",
    DoC: new Date().getTime(),
  },
  {
    _id: 'a00008',
    title: 'Pre-existing Diabetes Can Increase Risk for Birth Defects',
    content: "A study from the Centers for Disease Control and Prevention (CDC) found that women with pre-existing diabetes are at an increased risk of having a baby with a birth defect, such as a defect of the brain, spine, or heart.",
    DoC: new Date().getTime(),
  },
  {
    _id: 'a000016',
    title: 'Maternal Cold or Flu with Fever During Pregnancy May Be Linked to Birth Defects',
    content: "A study from the Centers for Disease Control and Prevention (CDC) found that women who had a cold or flu with fever just before or during early pregnancy may be more likely to have a baby born with a birth defect.",
    DoC: new Date().getTime(),
  },

]
export type feedContent__type = {
  _id: string,
  username: string,
  profilePic: string,   // url
  //contentPic: string,    // url
  description: string,
  DoC: number
}
export const feedContent: feedContent__type[] = [
  {
    _id: 'a00001',
    username: "Kanar Amer",
    DoC: new Date().getTime(),
    profilePic: 'https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg',
    //contentPic: 'https://avatars.mds.yandex.net/i?id=584dca4b68a7c68855e38bede4acb5c9-5859268-images-thumbs&ref=rim&n=33&w=390&h=205',
    description: "Hey ladies any advice for low back pain!"
  },
  {
    _id: 'a00002',
    username: "Alexa Nore",
    DoC: new Date().getTime(),
    profilePic: 'https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg',
    //contentPic: 'https://avatars.mds.yandex.net/i?id=90650b195d567aa02b8a73449b3f172b-5672525-images-thumbs&n=13',
    description: "Visited Iceland recantly, see for yourself! I'ts awesome there!"
  },
  {
    _id: 'a00003',
    username: "Luna Salami",
    DoC: new Date().getTime(),
    profilePic: 'https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg',
    //contentPic: 'https://avatars.mds.yandex.net/i?id=94d8580efd559853053068b998e575b8-5869166-images-thumbs&n=13',
    description: "Overwatch artworks are Out of this world. I made one myself just now, what do you think?"
  },
  {
    _id: 'a00004',
    username: "Sally Shally",
    DoC: new Date().getTime(),
    profilePic: 'https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg',
    //contentPic: 'https://avatars.mds.yandex.net/i?id=3ed7ef429152a3f30bdd42cc57c43102-5488374-images-thumbs&n=13',
    description: "Doing a review on that new game that came out, feel free to join me on: twitch.com/J3b4143d.\n It's fire!"
  }
]
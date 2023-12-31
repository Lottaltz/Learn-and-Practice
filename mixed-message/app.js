const message = [
    "Look for something positive everyday, even if some days you have to look a little harder.",
    "A bad day does not mean you have a bad life.",
    "Just be happy. Do not allow little stupid thing steal your happiness.",
    "A negative mind will never give you a positive life.",
    "Difficult roads often lead to beautiful destinations.",
    "Life is better when you are laughing.",
    "Never cry for the same reason.",
    "Sometimes what you are looking for comes when you are not looking.",
    "Wise man said “We were dumped by someone to meet a better one”.",
    "Cheer up! I know it is hard and tiring, but keep in mind that “this too shall pass”",
    "Every experience will make you grow up.",
    "Mistakes are sometimes the best memories.",
    "People can not love and appreciate others, If they cannot love and appreciate themselves.",
    "You get what you work for, not what you wish for.",
    "Do not let people decide who you are.",
    "Do it from love not for love.",
    "Your future needs you. You pass does not.",
    "Not all storms come to disrupt your life, some come to clear your path.",
    "Life is like a roller coaster, live it, be happy, enjoy life.",
    "Every new day is another chance to change your life.",
    "Do something today that your future self will thank you for.",
    "Do not just be good to others, be good to you.",
    "It always seems impossible until it is done.",
    "Just do not give up trying to do what you really want to do.Where there is love and inspiration, I do not think you can go wrong.",
    "It does not get easier. You just get better.",
    "Beauty begins the moment you decide to be yourself.",
    "Alone or not you gotta walk forward.",
    "Be yourself no matter whatever they say.",
    "Do not stop when you are tired, stop when you are done.",
    "Live life to the fullest, and focus on the positive.",
]

const randomNumber = Math.floor(Math.random() * 30)

function randomMessage(){
    const num = randomNumber;
   return message[num]
}

function showMessage(){
    console.log('Are you tried?')
    setTimeout(() => {
        console.log('I will cheer you up!')
    },1000)
    setTimeout(() => {
        console.log(`"${randomMessage()}"`)
    },2000)
}

showMessage()
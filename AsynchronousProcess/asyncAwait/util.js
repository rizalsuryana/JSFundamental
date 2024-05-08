const withDrawMoney = (amount) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 100) {
                reject(new Error('Teu cekap a acisna kanggo withDraw'));
            }

            resolve(amount);
        }, 1000);
    });
}

const buyCinemaTicket = (money) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (money < 10) {
                reject(new Error(`Acisna teu cekap kanggo meser ticket`));
            }
            resolve('ticket-1');
        }, 1000);
    });
}


const goInsideCinema = (ticket) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!ticket) {
                reject(new Error(`Teu ngagaduhan ticket hayang asup?`));
            }
            resolve(`Wilujeung nonton film ! :)`);
        }, 1000);
    });
}

module.exports = { withDrawMoney, buyCinemaTicket, goInsideCinema};
const averageExams = (valueExam) => {
    const numberValidation = valueExam.every(exam => typeof exam === 'number');
    if(!numberValidation) throw Error('silahkan masukan angka');

    const sumValues = valueExam.reduce((accumulator,currentValue)=> accumulator + currentValue, 0);
    return sumValues / valueExam.length;
};


const isStudentPassExam = (valueExam, name) => {
    const minValues = 75;
    const average = averageExams(valueExam);

    if(average >minValues) {
        console.log(`${name} pass the exams`);
        return true;
    } else{
        console.log(`${name} fail the exams`);
        return false
    }
};

module.exports = { averageExams, isStudentPassExam};
const {averageExams, isStudentPassExam} = require('../gradeCalculation');

// test('it should return exam average', () => { 
//     const listValueOfExams = [80, 100, 100, 80] ;
//     expect(averageExams(listValueOfExams)).toEqual(90);
// })

describe('grade calculation', () => {
    test('it should return exam average', () => { 
    const listValueOfExams = [80, 100, 100, 80] ;
    expect(averageExams(listValueOfExams)).toEqual(90);
});

/**
 * Integration testing
 */

test('it should return examp passed status', () => {
    const listValueOfExams = [80, 100, 80, 100];
    expect(isStudentPassExam(listValueOfExams, 'Rizal')).toEqual(true);
})

test('it should return examp failed status', () => {
    const listValueOfExams = [80, 20, 80, 30];
    expect(isStudentPassExam(listValueOfExams, 'Johan')).toEqual(false);
})

test('the data given should be number', () => {
    const listValueOfExams =[80, '3', 4];
    expect(() => averageExams(listValueOfExams)).toThrow(`silahkan masukan angka`);
})
    
});

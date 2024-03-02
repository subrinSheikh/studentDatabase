const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/studentDatabase')
    .then(() => console.log('database connected successfully'))
    .catch((e) => console.log('database not connected successfully', e));

const acedamicRecordsSchema = new mongoose.Schema({
    studentId: Number,
    name: String,
    grade: String,
    subject: Array,
    info: String,
    ranking: Number,
});

const coCurricularSchema = new mongoose.Schema({
    studentId: Number,
    name: String,
    activityType: String,
    acheivements: String,
    duration: String,
    artAndCraft: Number,
    isPresentBookClub: Boolean,
    poetryGrade: String,
});

const acedamicRecords = new mongoose.model('acedamicRecords', acedamicRecordsSchema);

const coCurricular = new mongoose.model('coCurricular', coCurricularSchema);

const createStudentRecord = async () => {
    try {
        await acedamicRecords.create([
            {
                studentId: 333,
                name: 'Subrin sheikh',
                grade: 'A',
                subject: ['Math', 'English', 'Science'],
                info: 'in 10th class',
                ranking: 1,
            },
            {
                studentId: 303,
                name: 'Muddu sheikh',
                grade: 'A+',
                subject: ['Math', 'English', 'Science', 'Histroy', 'Geography'],
                info: 'in 10th class',
                ranking: 2,
            },
            {
                studentId: 332,
                name: 'Arshiya sheikh',
                grade: 'A',
                subject: ['Math', 'English', 'Science', 'Biology', 'Electronics'],
                info: 'in 10th class',
                ranking: 3,
            }
        ]);
    } catch (e) {
        console.log('error');
    }
};

const createActiveRecords = async () => {
    try {
        await coCurricular.create([
            {
                studentId: 733,
                name: 'Mateen sheikh',
                activityType: 'athlete',
                acheivements: 'gold rank',
                duration: '6 months',
                artAndCraft: 1,
                isPresentBookClub: true,
                poetryGrade: 'C',
            },
            {
                studentId: 433,
                name: 'Naushi sheikh',
                activityType: 'gymnasium',
                acheivements: 'silver rank',
                duration: '3 months',
                artAndCraft: 1,
                isPresentBookClub: false,
                poetryGrade: 'B',
            },
            {
                studentId: 133,
                name: 'Arbaz Khan',
                activityType: 'swimming',
                acheivements: 'gold rank',
                duration: '12 months',
                artAndCraft: 2,
                isPresentBookClub: false,
                poetryGrade: 'A',
            },
            {
                studentId: 173,
                name: 'Shakeela Khan',
                activityType: 'dancing',
                acheivements: 'bronze rank',
                duration: '2 months',
                artAndCraft: 5,
                isPresentBookClub: false,
                poetryGrade: 'D',
            }
        ]);
    } catch {
        console.log('error');
    }
};
const readData = async () => {
    const result = await acedamicRecords.findOne();
    console.log("read Student record:", result);
};


const getData = async () => {
    const result = await acedamicRecords.findOne({ name: 'Subrin sheikh' });
    console.log("get Student record:", result);
};

const updatestudent = async () => {
    const update = await acedamicRecords.updateOne(
        { name: "Subrin sheikh" },
        { $set: { ranking: 5 } }
    );
    console.log("Updated student record:", update);
};

const delData = async () => {
    const result = await acedamicRecords.deleteOne({ name: 'Subrin sheikh' });
    console.log("Deleted student record", result);
};
const readDataActivity = async () => {
    const result = await acedamicRecords.findOne();
    console.log("read Student activity:", result);
};
const getDataActivity = async () => {
    const result1 = await coCurricular.findOne({ name: 'Mateen sheikh' });
    console.log("get student activity", result1);
};

const updatestudentActivity = async () => {
    const update = await coCurricular.updateOne(
        { activityType: 'gymnasium' },
        { $set: { isPresentBookClub: true } }
    );
    console.log("updated student activity", update);
};

const findData1 = async () => {
    const result = await coCurricular.findOne({ activityType: 'gymnasium' });
    console.log("all activity", result);
};

const delDataActivity = async () => {
    const result = await coCurricular.deleteOne({ acheivements: 'bronze rank' });
    console.log("Deleted student record", result);
};

(async () => {
    await createStudentRecord();
    await createActiveRecords();
    await readData();
    await getData();
    await updatestudent();
    await getData();
    await delData();
    await getData();
    await readDataActivity();
    await getDataActivity();
    await updatestudentActivity();
    await findData1();
    await delDataActivity();
})();

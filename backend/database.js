const mongoose = require('mongoose');
const config = {
    autoIndex: true,
    useNewUrlParser: true,
};
const connectionString = 'mongodb+srv://PhoneShop:PhoneShop123@cluster0-oohk7.mongodb.net/test';
mongoose.connect(connectionString, config)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.log('Cannot connect to MongoDB', err));

const studentSchema = new mongoose.Schema({
    id: String,
    name: String,
    class: String,
    hobbies: [String],
    isStudying: {type:Boolean, default: false},
    score: {type: Number, default: 0}
});
const Student = mongoose.model('Student', studentSchema);
async function createStudent() {
    const student = Student({
        id: '06101003',
        name: 'Supaporn',
        hobbies: ['Golf', 'Swimming'],
        class: '6/1',
        isStudying: true,
        score: 54
    });
    const data = await student.save();
    console.log(data);
}
createStudent();

const express = require('express');
const app = express();
const students1 = [
    {id:1, name:"Jeerawuth"},
    {id:2, name:"Supaporn"}
];
const students2 = [
    {id:1, name:"Sombat"},
    {id:2, name:"Phunchan"}
];
const schools = {
    'taweethapisek': students1,
    'suankularb':students2
};
app.get('/api/:school', function(req, res){
    const school = req.params.school.toLowerCase();
    if(school == 'taweethapisek') {
        res.send(students1);
    } else if(school == 'suankularb') {
        res.send(students2);
    } else {
        res.send('Not found any school');
    }
});
app.get('/api/:school/:id', function(req, res){
    const id = req.params.id;
    const schoolName = req.params.school.toLowerCase();
    if(!schools[schoolName]) {
        res.send('School not found');
    } else if(schools[schoolName][id-1]){
        res.send(schools[schoolName][id-1]);
    } else {
        res.send(`Not found student for id ${id}`);
    }
});
const port = process.env.port || 3000;
app.listen(port, function(){
    console.log('Listening on port', port);
});

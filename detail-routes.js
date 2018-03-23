var express = require('express');
var router = express.Router();
var company = require('./detail');

router.get('/detail',function(req,res){
    res.json(company.details);
});
router.post('/detail',function(req,res){
    var newCompany = {id: ++company.currentID, name: req.body.name, totalSteps: req.body.totalSteps};
    company.detail.push(newCompany);
    res.status(201).json(newCompany);
});
router.patch('/detail/:id',function(req,res){
    var detail = getList(req.params.id);
    if(!detail){
        return res.sendStatus(404);
    }
    update(detail, req.body.totalSteps);
    res.status(202).json(detail);
});
function getList (id){
    return company.detail.find(function(item){
         return item.id == id;
     });
 };
 function update(detail, newSteps){
    Object.assign(detail, newSteps);

};

module.exports = router;
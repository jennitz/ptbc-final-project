var express = require('express');
var router = express.Router();
var company = require('./detail');

router.get('/detail',function(req,res){
    res.json(company.details);
});
router.get('/employee',function(req,res){
    res.json(company.employeeDetails);
});

router.patch('/detail/:id',function(req,res){
    var details = getList(req.params.id);
    if(!details){
        return res.sendStatus(404);
    }
    update(details, req.body);
    res.status(202).json(details);
});
function getList (id){
    return company.employeeDetails.find(function(item){
         return item.id == id;
     });
 };
 function update(detail, newSteps){
    Object.assign(detail, newSteps);

};

module.exports = router;
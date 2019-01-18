//hard code
const stu_infos = [{
    id: 1,
    name: 'Tom',
    age: 25,
    sex: true
},
{
    id: 2,
    name: 'Jerry',
    age: 19,
    sex: true
},
{
    id: 3,
    name: 'Mary',
    age: 22,
    sex: false
},
{
    id: 4,
    name: 'Lisa',
    age: 21,
    sex: false
},
{
    id: 5,
    name: 'Peter',
    age: 32,
    sex: true
}]

const Query = {
    students: () => {
        return stu_infos;
    },
    student: (v, args) => {
        let temp = null;
        stu_infos.forEach(stu => {
            if (stu.id == args.id) {
                temp = stu;
            }
        });
        return temp;
    }
}

const Mutation = {
    saveStudent:(v,args)=>{
        stu_infos.push({
            id:args.id,
            name:args.name,
            age:args.age,
            sex:args.sex,
        })
        return stu_infos[stu_infos.length-1];
    },
    deleteStudent: (v, args) => {
        stu_infos.forEach((stu,index) => {
            if (stu.id == args.id) {
                stu_infos.splice(index,1);
            }
        });
        return stu_infos;
    }
}

module.exports = { Query,Mutation }
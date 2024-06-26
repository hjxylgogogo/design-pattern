
/**
 * 发工资的策略
 */
const strategies = {
    'S': function (salary) {
        return salary * 14
    },
    'A': function (salary) {
        return salary * 13
    },
    'B': function (salary) {
        return salary * 12
    },
}



/**
 * 根据策略计算年薪
 */
function calculateAnnualSalary(base, performance) {
    return strategies[performance](base)
}



const hjxAnnualSalary = calculateAnnualSalary(1000, 'S')
const ylAnnualSalary = calculateAnnualSalary(1000, 'A')
console.log(hjxAnnualSalary);
console.log(ylAnnualSalary);



// 公司突然增加需求：新增表现为c的工资策略 
strategies['C'] = function (salary) {
    return salary * 11
}

const yl2AnnualSalary = calculateAnnualSalary(1000, 'C')
console.log(yl2AnnualSalary);
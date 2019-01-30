import lodash from 'lodash';

const obj = {
  "manualHospitalOwnership": {
    "type": "enum",
    "name": "自填医院性质",
    "array": [
      {
        "value": "公立",
        "text": "公立"
      },
      {
        "value": "私立",
        "text": "私立"
      },
      {
        "value": "未查询到医院性质",
        "text": "未查询到医院性质"
      }
    ]
  },
  "hospitalDepartment": {
    "type": "string",
    "name": "科室",
  },
  "totalAmount": {
    "type": "money",
    "name": "合计金额(单位/元)",
  },
  "overAllTotalAmount": {
    "type": "money",
    "name": "统筹支付金额(单位/元)",
  },
  "thirdpartPayAmount": {
    "type": "money",
    "name": "第三方支付金额(单位/元)",
  },
  "invoiceTime": {
    "type": "date",
    "name": "发票时间",
    a: () => {
      return 'abc';
    }
  }
}



const ret = lodash.mapValues(obj, function(a, b, c) {
  return {
    ...a,
    id: 1,
  }
});

// console.log('ret>>>', ret);




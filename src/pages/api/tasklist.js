// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const arrTasks = [];

export default function handler(req, res) {


  if(req.method === 'GET') {


    get(req, res)

  } else if(req.method === 'POST') {


    post(req, res)
  }








}


function get(req, res) {


res.status(200).json(arrTasks)
console.log(doIt)
}

function post(req, res) {

  const currentData = JSON.parse(req.body);
  arrTasks.push(currentData);
  res.status(200).send();
}
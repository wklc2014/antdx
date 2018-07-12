export default {
  "hashHistory": true,
  "plugins": [
    ["umi-plugin-dva", {
      "immer": true,
      "exclude": [
        /^\$/
      ]
    }],
    ["umi-plugin-routes", {
      "exclude": [
        /models/,
        /model/,
        /services/,
        /service/,
        /components/,
        /common/
      ]
    }]
  ],
  "disableDynamicImport": false,
  "disableHash": true,
  "disableServiceWorker": true
}
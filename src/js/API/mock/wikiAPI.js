//privates
var _pathes = [
  "page0.json",
  "feature",
  "feature/about",
  "feature/about/page1.json",
  "feature/about/page2.json",
  "feature/contact",
  "feature/contact/page3.json"
];
var files = {
  "/page0.json":{content:'<p>page0 content</p>'},
  "feature/about/page1.json":{content:'<p>page1 content</p>'},
  "feature/about/page2.json":{content:'<p>page2 content</p>'},
  "feature/contact/page3.json":{content:'<p>page3 content</p>'},
}
export default {
  getItems(pathArr) {
      var resultHash = {};
      var result = [];
      _pathes.forEach(function(item) {
        var arr = item.split('/');
        var type = (arr[0].indexOf('.json') !== -1) ? 'FILE' : 'FOLDER';
        var found = {
          path: arr[0],
          type: type
        };
        if (pathArr.length > 0) {
          pathArr.every(function(item, index) {
            var target = arr[index];
            if (target && target === item) {
              found.path = arr[index + 1];
              if (arr[index + 1]) {
                found.type = (arr[index + 1].indexOf('.json') !== -1) ? 'FILE' : 'FOLDER';
              }
              return true;
            }
            found = null;
            return false;
          });
        }
        if (found && found.path && resultHash[found.path] === undefined) {
          resultHash[found.path] = found;
        }
      });
      Object.keys(resultHash).forEach(function(key) {
        result.push(resultHash[key]);
      });
      return result;
    },

    getItem(path){
      return files[path];
    },

    postItem(path) {
      _pathes.push(path);
    }
}

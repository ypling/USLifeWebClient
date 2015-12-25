//privates
var _pathes = [
  "page0.json",
  "feature/about/",
  "feature/about/page1.json",
  "feature/about/page2.json",
  "feature/contact/",
  "feature/contact/page3.json"
]
export default {
  getItems(pathArr) {
      var result = [];
      _pathes.forEach(function(item) {
        var arr = item.split('/');
        var found = arr[0];
        if (pathArr.length>0) {
          pathArr.every(function(item, index) {
            var target = arr[index];
            if (target && target === item) {
              found = arr[index + 1];
              return true;
            }
            found = false;
            return false;
          });
        }
        if (found && result.indexOf(found) === -1) {
          result.push(found);
        }
      });
      return result;
    },

    postItem(path) {
      _pathes.push(path);
    }
}

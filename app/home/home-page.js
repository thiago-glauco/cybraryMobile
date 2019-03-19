const observable = require("tns-core-modules/data/observable");

function pageLoaded(args) {

  var page = args.object;
  const viewModel = new observable.fromObject({
    name: "",
    quote: "",
    genders: ["other", "male", "female", "don't want to tell"],
    selected: 0,
  })

  page.bindingContext = viewModel;
}

function onTap(args) {
  console.log("clicked");
  const page = args.object;
  const viewModel = page.bindingContext;
  let message = `"${viewModel.quote}"\nA quote from ${viewModel.name}`;
  console.log("this user's gender is: " + viewModel.genders[viewModel.selected]);
  alert(message);
}

exports.onTap = onTap;
exports.pageLoaded = pageLoaded;

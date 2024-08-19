import connection from "../database/connection.js";

import "../models/UserModel.js";
import "../models/CategoryModel.js";
import "../models/ProductModel.js";
import "../models/ImageProductModel.js";
import "../models/OptionProductModel.js";
import "../models/ProductCategoryModel.js";

connection.sync({force:true});

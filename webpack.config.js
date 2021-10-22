const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/index.js",
    header: "./src/Header/index.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },

  // Este elemento resulve las extensiones que vamos a utilizar
  resolve: {
    extensions: [".tsx", ".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
    },
  },

  // Se añaden los plugins que necesitamos
  plugins: [
    // pasamo un objeto con la configuracion que necesitamos
    new HtmlWebpackPlugin({
      //Donde esta ubicado el template que tenemos
      template: "./public/index.html",
      filename: "./index.html",
    }),

    new WebpackPwaManifestPlugin({
      //Le pasamos el objeto de configuracion
      name: "MercandoApp ",
      shortname: "Mercando",
      description: "Mercando permite crear tus listas de compras.",
      background_color: "#f8e808",
      theme_color: "#b1a",

      //Array iconos de la aplicacion
      icons: [
        {
          src: path.resolve("src/assets/favicon.png"),
          //Le pasamos todos los tamaños que requerimos
          sizes: [192, 512],
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),

    /* new FaviconsWebpackPlugin("./src/assets/favicon.png"), */

    new FaviconsWebpackPlugin({
      logo: "./src/assets/favicon.png",
      favicons: {
        background: "#f8e808",
        theme_color: "#b1a",
      },
    }),

    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://maps.arcgis.com/sharing/rest/content/items/3ddd6c4932d649d6996db442e920ceb9/data|res.cloudinary.com"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          // Cache para la API
          urlPattern: new RegExp(
            "https://api-covi-19.jorgevelasquez006.now.sh/API/covi19.json|https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief|https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=CO"
          ),
          // Le decimos que primero valla a la red antes de ir a la cache
          // para tener los datos actulizados
          handler: "NetworkFirst",
          //Le pasamos el nombre de la cache api
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [["optipng", { optimizationLevel: 5 }]],
      },
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: "all",
          name: "commons",
          filename: "assets/common.[chunkhash].js",
          reuseExistingChunk: true,
          enforce: true,
          priority: 20,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name: "vendors",
          filename: "assets/vendor.[chunkhash].js",
          reuseExistingChunk: true,
          enforce: true,
          priority: 10,
        },
      },
    },
  },

  module: {
    rules: [
      {
        // Regla principal
        // Identificacion de los archivos con una expresion regular
        test: /\.(js|jsx)$/,
        // Exclusion de carpetas
        exclude: /node_modules/,
        // Utilizamos el loader de babel instalado
        use: {
          loader: "babel-loader",
        },
      },
      {
        // Regla para trabajar con los archivos html
        test: /\.html$/,
        // Utilizamos el loader de babel instalado
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          /*  "sass-loader", */
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
      /* {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "assets/[hash].[ext]" },
          },
        ],
      }, */
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
};

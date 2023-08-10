// floor
import woodTexture from "./148_Dark Parquet Floor_Texture-seamless.jpg";
import marbalTileTexture from "./104_Calacatta Marble Floor_PBRTexture-seamless.jpg";
import silverTravertineFloor from "./117_Silver Travertine Floor_tileTexture-seamless.jpg";
import herringboneParquet1 from "./100_Herringbone Parquet_texture-seamless.jpg";
import blackPortoroGold from "./48_Black Portoro Gold_tilesPBRtexture-seamless.jpg";
import blackAndWhiteMarbleTile from "./35_Black and white Marble tile_texture-seamless.jpg";
import blackMarbleTiles from "./46_Black Marble Tiles_PBRtexture-seamless.jpg";
import blackAndWhiteMarble2 from "./38_Black and white Marble 2_tileTexture-seamless.jpg";
import decorativeTilesAgata from "./74_Decorative tiles agata_effectPbrtexture seamless.jpg";
import botticinoMarbleTile from "./85_Botticino marble tile_texture-seamless.jpg";
import creamMarbleTile from "./1_Cream marble tile_texture-seamless.jpg";
import peachBlossomCarnianGrayMarble from "./56_Peach Blossom Carnian gray marble_floorTexture-seamless.jpg";
import whiteMarbleFloor from "./30_White marble floor_tileTexture-seamless.jpg";
import geometricMarbleTiles from "./40_Geometric marble tiles_patternsTexture-seamless.jpg";
import ceppoDiGreStone from "./71_Ceppo Di Grè stone_flooringPBRtexture-seamless.jpg";
import herringboneParquet2 from "./112_Herringbone parquet_PBRtexture-seamless.jpg";
import herringboneParquet3 from "./111_Herringbone parquet_PBRTexture-seamless.jpg";
import industrialStyleDarkParquet from "./163_Industrial Style Dark Parquet_pbrTextureSeamless.jpg";
import emptyTexture from "./emptyTexture.jpg";
// floor
// walpaper
import FlowerWallpaperWmmagina from "./wallpaper/5_Flower wallpaper immagina_byParatoTexture-seamless.jpg";
import LilyWallpaperElegance from "./wallpaper/5_Lily Wallpaper Elegance_byParatoTexture-seamless.jpg";
import ShantungFlowerNaturaWallpaper from "./wallpaper/7_Shantung flower natura wallpaper_texture-seamless.jpg";
import TheBranchEleganceWallpaper from "./wallpaper/11_The branch elegance wallpaper_byParatoTexture-seamless.jpg";
import LeafWallpaperElegance from "./wallpaper/21_Leaf wallpaper elegance_byParatoTexture-seamless.jpg";
import LeafWallpaperElegance1 from "./wallpaper/23_Leaf wallpaper elegance_byParatoTexture-seamless.jpg";
import GeometricOrnateWallpaperImmagina from "./wallpaper/26_Geometric ornate wallpaper immagina_byParatoTexture-seamless.jpg";
import EleganceWallpaperTheRose from "./wallpaper/32_Elegance wallpaper the rose_byParatoTexture-seamless.jpg";
import RhombusWallpaperImmagina from "./wallpaper/40_Rhombus wallpaper immagina_byParatoTexture-seamless.jpg";
import CottonWallpaper from "./wallpaper/42_Cotton wallpaper_texture-seamless.jpg";
import RhombusWallpaperImmagina2 from "./wallpaper/42_Rhombus wallpaper immagina_byParaToTexture-seamless.jpg";
import CottonWallpaper1 from "./wallpaper/43_Cotton wallpaper_texture-seamless.jpg";
import UniWallpaperImmagina from "./wallpaper/47_Uni wallpaper immagina_byParatoTexture-seamless.jpg";
// floor

export default function fetchTexture(material) {
    switch (material) {
        // floor
        case "None":
            return emptyTexture;
        case "148_Dark Parquet Floor_Texture-seamless":
            return woodTexture;
        case "104_Calacatta Marble Floor_PBRTexture-seamless":
            return marbalTileTexture;
        case "117_Silver Travertine Floor_tileTexture - seamless":
            return silverTravertineFloor;
        case "100_Herringbone Parquet_texture - seamless":
            return herringboneParquet1;
        case "48_Black Portoro Gold_tilesPBRtexture - seamless":
            return blackPortoroGold;
        case "35_Black and white Marble tile_texture - seamless":
            return blackAndWhiteMarbleTile;
        case "46_Black Marble Tiles_PBRtexture - seamless":
            return blackMarbleTiles;
        case "38_Black and white Marble 2_tileTexture - seamless":
            return blackAndWhiteMarble2;
        case "74_Decorative tiles agata_effectPbrtexture seamless":
            return decorativeTilesAgata;
        case "85_Botticino marble tile_texture - seamless":
            return botticinoMarbleTile;
        case "1_Cream marble tile_texture - seamless":
            return creamMarbleTile;
        case "56_Peach Blossom Carnian gray marble_floorTexture - seamless":
            return peachBlossomCarnianGrayMarble;
        case "30_White marble floor_tileTexture - seamless":
            return whiteMarbleFloor;
        case "40_Geometric marble tiles_patternsTexture - seamless":
            return geometricMarbleTiles;
        case "71_Ceppo Di Grè stone_flooringPBRtexture - seamless":
            return ceppoDiGreStone;
        case "112_Herringbone parquet_PBRtexture - seamless":
            return herringboneParquet2;
        case "111_Herringbone parquet_PBRTexture - seamless":
            return herringboneParquet3;
        case "163_Industrial Style Dark Parquet_pbrTextureSeamless":
            return industrialStyleDarkParquet;
        //floor
        // wallpaper
        case "5_Flower wallpaper immagina_byParatoTexture-seamless":
            return FlowerWallpaperWmmagina;
        case "5_Lily Wallpaper Elegance_byParatoTexture-seamless":
            return LilyWallpaperElegance;
        case "7_Shantung flower natura wallpaper_texture-seamless":
            return ShantungFlowerNaturaWallpaper;
        case "11_The branch elegance wallpaper_byParatoTexture-seamless":
            return TheBranchEleganceWallpaper;
        case "21_Leaf wallpaper elegance_byParatoTexture-seamless":
            return LeafWallpaperElegance;
        case "23_Leaf wallpaper elegance_byParatoTexture-seamless":
            return LeafWallpaperElegance1;
        case "26_Geometric ornate wallpaper immagina_byParatoTexture-seamless":
            return GeometricOrnateWallpaperImmagina;
        case "32_Elegance wallpaper the rose_byParatoTexture-seamless":
            return EleganceWallpaperTheRose;
        case "40_Rhombus wallpaper immagina_byParatoTexture-seamless":
            return RhombusWallpaperImmagina;
        case "42_Cotton wallpaper_texture-seamless":
            return CottonWallpaper;
        case "42_Rhombus wallpaper immagina_byParaToTexture-seamless":
            return RhombusWallpaperImmagina2;
        case "43_Cotton wallpaper_texture-seamless":
            return CottonWallpaper1;
        case "47_Uni wallpaper immagina_byParatoTexture-seamless":
            return UniWallpaperImmagina;
        // wallpaper
        default:
            return emptyTexture;
    }
};

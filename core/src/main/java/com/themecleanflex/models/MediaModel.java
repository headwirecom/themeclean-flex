package com.themecleanflex.models;

import com.peregrine.nodetypes.models.AbstractComponent;
import com.peregrine.nodetypes.models.IComponent;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;

/*
    //GEN[:DATA
    {
  "definitions": {
    "Media": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "mediatype": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Media type",
          "x-form-type": "materialradio",
          "properties": {
            "image": {
              "x-form-name": "Image",
              "x-form-value": "image"
            },
            "video": {
              "x-form-name": "Video",
              "x-form-value": "video"
            },
            "icon": {
              "x-form-name": "Icon",
              "x-form-value": "icon"
            }
          }
        },
        "mediaicon": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Icon Chooser",
          "x-form-type": "iconbrowser",
          "x-form-hint": "Select an icon.",
          "x-form-validator": "required",
          "x-form-visible": "model.mediatype == 'icon'",
          "x-form-families": [
            "material",
            "font awesome"
          ]
        },
        "mediaiconsize": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Icon Size",
          "x-form-type": "materialrange",
          "x-form-visible": "model.mediatype == 'icon'",
          "x-default": 50,
          "x-form-min": 1,
          "x-form-max": 1000
        },
        "mediaiconcolor": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Icon Color",
          "x-form-type": "color",
          "x-form-visible": "model.mediatype == 'icon'",
          "x-default": "#000000"
        },
        "imagesrc": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Image Source",
          "x-form-visible": "model.mediatype == 'image'",
          "x-form-type": "pathbrowser",
          "x-form-browserRoot": "/content/themecleanflex/assets"
        },
        "videosrc": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Video Source",
          "x-form-visible": "model.mediatype == 'video'",
          "x-form-type": "pathbrowser",
          "x-form-browserRoot": "/content/themecleanflex/assets"
        },
        "mediatitle": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Media Alt Text/Title",
          "x-form-visible": "model.mediatype == 'image' or model.mediatype == 'video'",
          "x-form-type": "text"
        },
        "mediawidth": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Width",
          "x-form-type": "materialrange",
          "x-default": 100,
          "x-form-min": 10,
          "x-form-max": 100
        }
      }
    }
  },
  "name": "Media",
  "componentPath": "themecleanflex/components/media",
  "package": "com.themecleanflex.models",
  "modelName": "Media",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
    adaptables = Resource.class,
    resourceType = "themecleanflex/components/media",
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    adapters = IComponent.class
)
@Exporter(
    name = "jackson",
    extensions = "json"
)

//GEN]
public class MediaModel extends AbstractComponent {

    public MediaModel(Resource r) {
        super(r);
    }

    //GEN[:INJECT
    /* {"type":"string","x-source":"inject","x-form-label":"Media type","x-form-type":"materialradio","properties":{"image":{"x-form-name":"Image","x-form-value":"image"},"video":{"x-form-name":"Video","x-form-value":"video"},"icon":{"x-form-name":"Icon","x-form-value":"icon"}}} */
    @Inject
    private String mediatype;

    /* {"type":"string","x-source":"inject","x-form-label":"Icon Chooser","x-form-type":"iconbrowser","x-form-hint":"Select an icon.","x-form-validator":"required","x-form-visible":"model.mediatype == 'icon'","x-form-families":["material","font awesome"]} */
    @Inject
    private String mediaicon;

    /* {"type":"string","x-source":"inject","x-form-label":"Icon Size","x-form-type":"materialrange","x-form-visible":"model.mediatype == 'icon'","x-default":50,"x-form-min":1,"x-form-max":1000} */
    @Inject
    @Default(values = "50")
    private String mediaiconsize;

    /* {"type":"string","x-source":"inject","x-form-label":"Icon Color","x-form-type":"color","x-form-visible":"model.mediatype == 'icon'","x-default":"#000000"} */
    @Inject
    @Default(values = "#000000")
    private String mediaiconcolor;

    /* {"type":"string","x-source":"inject","x-form-label":"Image Source","x-form-visible":"model.mediatype == 'image'","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/assets"} */
    @Inject
    private String imagesrc;

    /* {"type":"string","x-source":"inject","x-form-label":"Video Source","x-form-visible":"model.mediatype == 'video'","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/assets"} */
    @Inject
    private String videosrc;

    /* {"type":"string","x-source":"inject","x-form-label":"Media Alt Text/Title","x-form-visible":"model.mediatype == 'image' or model.mediatype == 'video'","x-form-type":"text"} */
    @Inject
    private String mediatitle;

    /* {"type":"string","x-source":"inject","x-form-label":"Width","x-form-type":"materialrange","x-default":100,"x-form-min":10,"x-form-max":100} */
    @Inject
    @Default(values = "100")
    private String mediawidth;


//GEN]

    //GEN[:GETTERS
    /* {"type":"string","x-source":"inject","x-form-label":"Media type","x-form-type":"materialradio","properties":{"image":{"x-form-name":"Image","x-form-value":"image"},"video":{"x-form-name":"Video","x-form-value":"video"},"icon":{"x-form-name":"Icon","x-form-value":"icon"}}} */
    public String getMediatype() {
        return mediatype;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Icon Chooser","x-form-type":"iconbrowser","x-form-hint":"Select an icon.","x-form-validator":"required","x-form-visible":"model.mediatype == 'icon'","x-form-families":["material","font awesome"]} */
    public String getMediaicon() {
        return mediaicon;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Icon Size","x-form-type":"materialrange","x-form-visible":"model.mediatype == 'icon'","x-default":50,"x-form-min":1,"x-form-max":1000} */
    public String getMediaiconsize() {
        return mediaiconsize;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Icon Color","x-form-type":"color","x-form-visible":"model.mediatype == 'icon'","x-default":"#000000"} */
    public String getMediaiconcolor() {
        return mediaiconcolor;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Image Source","x-form-visible":"model.mediatype == 'image'","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/assets"} */
    public String getImagesrc() {
        return imagesrc;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Video Source","x-form-visible":"model.mediatype == 'video'","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/assets"} */
    public String getVideosrc() {
        return videosrc;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Media Alt Text/Title","x-form-visible":"model.mediatype == 'image' or model.mediatype == 'video'","x-form-type":"text"} */
    public String getMediatitle() {
        return mediatitle;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Width","x-form-type":"materialrange","x-default":100,"x-form-min":10,"x-form-max":100} */
    public String getMediawidth() {
        return mediawidth;
    }


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}

package com.themecleanflex.models;

import com.peregrine.nodetypes.models.AbstractComponent;
import com.peregrine.nodetypes.models.IComponent;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;

/*
    //GEN[:DATA
    {
  "definitions": {
    "Spacer": {
      "type": "object",
      "x-form-groups": [
        "content",
        "style",
        "advanced"
      ],
      "x-type": "component",
      "properties": {
        "height": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Height",
          "x-form-group": "content",
          "x-form-type": "materialrange",
          "x-form-min": 0,
          "x-form-max": 100
        },
        "bgref": {
          "x-form-type": "reference",
          "type": "object",
          "x-type": "component",
          "properties": {
            "anchorname": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Anchor Name",
              "x-form-group": "advanced",
              "x-form-type": "text"
            },
            "colorscheme": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Block Color Scheme",
              "x-form-type": "materialradio",
              "x-form-group": "style",
              "x-default": "",
              "properties": {
                "none": {
                  "x-form-name": "None",
                  "x-form-value": ""
                },
                "light": {
                  "x-form-name": "Light",
                  "x-form-value": "light"
                },
                "dark": {
                  "x-form-name": "Dark",
                  "x-form-value": "dark"
                }
              }
            },
            "custombackground": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Custom Background",
              "x-form-group": "style",
              "x-form-type": "materialswitch",
              "x-default": "false"
            },
            "backgroundtype": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Background Type",
              "x-form-group": "style",
              "x-form-type": "materialradio",
              "x-form-visible": "model.custombackground == 'true'",
              "properties": {
                "color": {
                  "x-form-name": "Color",
                  "x-form-value": "color"
                },
                "gradient": {
                  "x-form-name": "Gradient",
                  "x-form-value": "gradient"
                },
                "image": {
                  "x-form-name": "Image",
                  "x-form-value": "image"
                },
                "video": {
                  "x-form-name": "Video",
                  "x-form-value": "video"
                }
              }
            },
            "bgvideo": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Background Video",
              "x-form-group": "style",
              "x-form-type": "pathbrowser",
              "x-form-visible": "model.backgroundtype == 'video' and model.custombackground == 'true'",
              "x-default": "https://www.youtube.com/embed/Ju86mknumYM",
              "x-form-browserRoot": "/content/themecleanflex/assets"
            },
            "bgimage": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Background Image",
              "x-form-group": "style",
              "x-form-type": "pathbrowser",
              "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'",
              "x-form-browserRoot": "/content/themecleanflex/assets"
            },
            "bgxposition": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Background X Position",
              "x-form-group": "style",
              "x-form-type": "materialrange",
              "x-form-min": 0,
              "x-form-max": 100,
              "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'",
              "x-default": "50"
            },
            "bgyposition": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Background Y Position",
              "x-form-group": "style",
              "x-form-type": "materialrange",
              "x-form-min": 0,
              "x-form-max": 100,
              "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'",
              "x-default": "50"
            },
            "bgsize": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Background Image Size",
              "x-form-group": "style",
              "x-form-type": "materialselect",
              "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'",
              "x-default": "cover",
              "properties": {
                "section": {
                  "x-form-name": "cover",
                  "x-form-value": "cover"
                },
                "article": {
                  "x-form-name": "contain",
                  "x-form-value": "contain"
                },
                "main": {
                  "x-form-name": "auto",
                  "x-form-value": "auto"
                }
              }
            },
            "overlay": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Overlay",
              "x-form-group": "style",
              "x-form-type": "materialswitch",
              "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'"
            },
            "overlaycolor": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Overlay Color",
              "x-form-group": "style",
              "x-form-type": "color",
              "x-form-visible": "model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'",
              "x-default": "#ffffff"
            },
            "overlayopacity": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Overlay opacity",
              "x-form-group": "style",
              "x-form-type": "materialrange",
              "x-form-min": 0,
              "x-form-max": 100,
              "x-form-visible": "model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'",
              "x-default": "50"
            },
            "bgcolor": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Background Color",
              "x-form-group": "style",
              "x-form-type": "color",
              "x-form-visible": "(model.backgroundtype == 'color' or model.backgroundtype == 'gradient') and model.custombackground == 'true'",
              "x-default": "#ffffff"
            },
            "color2": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Color 2",
              "x-form-group": "style",
              "x-form-type": "color",
              "x-form-visible": "model.backgroundtype == 'gradient' and model.custombackground == 'true'",
              "x-default": "#c0c0c0"
            }
          }
        }
      }
    }
  },
  "name": "Spacer",
  "componentPath": "themecleanflex/components/spacer",
  "package": "com.themecleanflex.models",
  "modelName": "Spacer",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
  adaptables = Resource.class,
  resourceType = "themecleanflex/components/spacer",
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
  adapters = IComponent.class
)
@Exporter(name = "jackson", extensions = "json")
//GEN]
public class SpacerModel extends AbstractComponent {

  public SpacerModel(Resource r) {
    super(r);
  }

  //GEN[:INJECT
  /* {"type":"string","x-source":"inject","x-form-label":"Height","x-form-group":"content","x-form-type":"materialrange","x-form-min":0,"x-form-max":100} */
  @Inject
  private String height;

  /* {"type":"string","x-source":"inject","x-form-label":"Anchor Name","x-form-group":"advanced","x-form-type":"text"} */
  @Inject
  private String anchorname;

  /* {"type":"string","x-source":"inject","x-form-label":"Block Color Scheme","x-form-type":"materialradio","x-form-group":"style","x-default":"","properties":{"none":{"x-form-name":"None","x-form-value":""},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
  @Inject
  @Default(values = "")
  private String colorscheme;

  /* {"type":"string","x-source":"inject","x-form-label":"Custom Background","x-form-group":"style","x-form-type":"materialswitch","x-default":"false"} */
  @Inject
  @Default(values = "false")
  private String custombackground;

  /* {"type":"string","x-source":"inject","x-form-label":"Background Type","x-form-group":"style","x-form-type":"materialradio","x-form-visible":"model.custombackground == 'true'","properties":{"color":{"x-form-name":"Color","x-form-value":"color"},"gradient":{"x-form-name":"Gradient","x-form-value":"gradient"},"image":{"x-form-name":"Image","x-form-value":"image"},"video":{"x-form-name":"Video","x-form-value":"video"}}} */
  @Inject
  private String backgroundtype;

  /* {"type":"string","x-source":"inject","x-form-label":"Background Video","x-form-group":"style","x-form-type":"pathbrowser","x-form-visible":"model.backgroundtype == 'video' and model.custombackground == 'true'","x-default":"https://www.youtube.com/embed/Ju86mknumYM","x-form-browserRoot":"/content/themecleanflex/assets"} */
  @Inject
  @Default(values = "https://www.youtube.com/embed/Ju86mknumYM")
  private String bgvideo;

  /* {"type":"string","x-source":"inject","x-form-label":"Background Image","x-form-group":"style","x-form-type":"pathbrowser","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-form-browserRoot":"/content/themecleanflex/assets"} */
  @Inject
  private String bgimage;

  /* {"type":"string","x-source":"inject","x-form-label":"Background X Position","x-form-group":"style","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
  @Inject
  @Default(values = "50")
  private String bgxposition;

  /* {"type":"string","x-source":"inject","x-form-label":"Background Y Position","x-form-group":"style","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
  @Inject
  @Default(values = "50")
  private String bgyposition;

  /* {"type":"string","x-source":"inject","x-form-label":"Background Image Size","x-form-group":"style","x-form-type":"materialselect","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"cover","properties":{"section":{"x-form-name":"cover","x-form-value":"cover"},"article":{"x-form-name":"contain","x-form-value":"contain"},"main":{"x-form-name":"auto","x-form-value":"auto"}}} */
  @Inject
  @Default(values = "cover")
  private String bgsize;

  /* {"type":"string","x-source":"inject","x-form-label":"Overlay","x-form-group":"style","x-form-type":"materialswitch","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'"} */
  @Inject
  private String overlay;

  /* {"type":"string","x-source":"inject","x-form-label":"Overlay Color","x-form-group":"style","x-form-type":"color","x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"#ffffff"} */
  @Inject
  @Default(values = "#ffffff")
  private String overlaycolor;

  /* {"type":"string","x-source":"inject","x-form-label":"Overlay opacity","x-form-group":"style","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
  @Inject
  @Default(values = "50")
  private String overlayopacity;

  /* {"type":"string","x-source":"inject","x-form-label":"Background Color","x-form-group":"style","x-form-type":"color","x-form-visible":"(model.backgroundtype == 'color' or model.backgroundtype == 'gradient') and model.custombackground == 'true'","x-default":"#ffffff"} */
  @Inject
  @Default(values = "#ffffff")
  private String bgcolor;

  /* {"type":"string","x-source":"inject","x-form-label":"Color 2","x-form-group":"style","x-form-type":"color","x-form-visible":"model.backgroundtype == 'gradient' and model.custombackground == 'true'","x-default":"#c0c0c0"} */
  @Inject
  @Default(values = "#c0c0c0")
  private String color2;

  //GEN]

  //GEN[:GETTERS
  /* {"type":"string","x-source":"inject","x-form-label":"Height","x-form-group":"content","x-form-type":"materialrange","x-form-min":0,"x-form-max":100} */
  public String getHeight() {
    return height;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Anchor Name","x-form-group":"advanced","x-form-type":"text"} */
  public String getAnchorname() {
    return anchorname;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Block Color Scheme","x-form-type":"materialradio","x-form-group":"style","x-default":"","properties":{"none":{"x-form-name":"None","x-form-value":""},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
  public String getColorscheme() {
    return colorscheme;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Custom Background","x-form-group":"style","x-form-type":"materialswitch","x-default":"false"} */
  public String getCustombackground() {
    return custombackground;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Background Type","x-form-group":"style","x-form-type":"materialradio","x-form-visible":"model.custombackground == 'true'","properties":{"color":{"x-form-name":"Color","x-form-value":"color"},"gradient":{"x-form-name":"Gradient","x-form-value":"gradient"},"image":{"x-form-name":"Image","x-form-value":"image"},"video":{"x-form-name":"Video","x-form-value":"video"}}} */
  public String getBackgroundtype() {
    return backgroundtype;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Background Video","x-form-group":"style","x-form-type":"pathbrowser","x-form-visible":"model.backgroundtype == 'video' and model.custombackground == 'true'","x-default":"https://www.youtube.com/embed/Ju86mknumYM","x-form-browserRoot":"/content/themecleanflex/assets"} */
  public String getBgvideo() {
    return bgvideo;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Background Image","x-form-group":"style","x-form-type":"pathbrowser","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-form-browserRoot":"/content/themecleanflex/assets"} */
  public String getBgimage() {
    return bgimage;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Background X Position","x-form-group":"style","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
  public String getBgxposition() {
    return bgxposition;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Background Y Position","x-form-group":"style","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
  public String getBgyposition() {
    return bgyposition;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Background Image Size","x-form-group":"style","x-form-type":"materialselect","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"cover","properties":{"section":{"x-form-name":"cover","x-form-value":"cover"},"article":{"x-form-name":"contain","x-form-value":"contain"},"main":{"x-form-name":"auto","x-form-value":"auto"}}} */
  public String getBgsize() {
    return bgsize;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Overlay","x-form-group":"style","x-form-type":"materialswitch","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'"} */
  public String getOverlay() {
    return overlay;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Overlay Color","x-form-group":"style","x-form-type":"color","x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"#ffffff"} */
  public String getOverlaycolor() {
    return overlaycolor;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Overlay opacity","x-form-group":"style","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
  public String getOverlayopacity() {
    return overlayopacity;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Background Color","x-form-group":"style","x-form-type":"color","x-form-visible":"(model.backgroundtype == 'color' or model.backgroundtype == 'gradient') and model.custombackground == 'true'","x-default":"#ffffff"} */
  public String getBgcolor() {
    return bgcolor;
  }

  /* {"type":"string","x-source":"inject","x-form-label":"Color 2","x-form-group":"style","x-form-type":"color","x-form-visible":"model.backgroundtype == 'gradient' and model.custombackground == 'true'","x-default":"#c0c0c0"} */
  public String getColor2() {
    return color2;
  }
  //GEN]

  //GEN[:CUSTOMGETTERS
  //GEN]

}

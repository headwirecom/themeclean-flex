package com.themecleanflex.models;

import com.peregrine.nodetypes.models.AbstractComponent;
import com.peregrine.nodetypes.models.IComponent;
import com.peregrine.nodetypes.models.Container;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

/*
    //GEN[:DATA
    {
  "definitions": {
    "Footer": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "showlogo": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Show Logo",
          "x-form-type": "materialswitch"
        },
        "logo": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Logo",
          "x-form-type": "pathbrowser",
          "x-form-visible": "model.showlogo == 'true'",
          "x-form-browserRoot": "/content/assets"
        },
        "logoalttext": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Logo Alt Text",
          "x-form-visible": "model.showlogo == 'true'",
          "x-form-type": "text"
        },
        "logourl": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Logo Url",
          "x-form-type": "pathbrowser",
          "x-form-visible": "model.showlogo == 'true'",
          "x-form-browserRoot": "/content/sites"
        },
        "logosize": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Logo Size",
          "x-form-type": "materialrange",
          "x-form-visible": "model.showlogo == 'true'",
          "x-form-min": 1,
          "x-form-max": 300
        },
        "columns": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Columns",
          "x-form-type": "collection",
          "x-form-multifield": "true",
          "properties": {
            "title": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Title",
              "x-form-type": "text"
            },
            "text": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Text",
              "x-form-type": "texteditor"
            }
          }
        },
        "copyright": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Copyright Text",
          "x-form-type": "text"
        },
        "socialref": {
          "x-form-type": "reference",
          "type": "object",
          "x-type": "component",
          "properties": {
            "iconcustomcolor": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Custom Icons Color",
              "x-form-type": "materialswitch"
            },
            "iconcolor": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Icon Color",
              "x-default": "#000000",
              "x-form-visible": "model.iconcustomcolor == 'true'",
              "x-form-type": "color"
            },
            "iconsize": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Icon Size",
              "x-form-type": "materialrange",
              "x-default": "25",
              "x-form-min": 0,
              "x-form-max": 150
            },
            "icons": {
              "type": "object",
              "x-form-type": "collection",
              "x-form-label": "Icons",
              "x-source": "inject",
              "properties": {
                "icon": {
                  "type": "string",
                  "x-source": "inject",
                  "x-form-label": "Icon Chooser",
                  "x-form-type": "iconbrowser",
                  "x-form-hint": "Select an icon.",
                  "x-form-required": true,
                  "x-form-validator": "required",
                  "x-form-families": [
                    "material",
                    "font awesome"
                  ]
                },
                "url": {
                  "type": "string",
                  "x-source": "inject",
                  "x-form-label": "Icon Url",
                  "x-form-type": "pathbrowser",
                  "x-form-browserRoot": "/content/sites"
                },
                "iconalttext": {
                  "type": "string",
                  "x-source": "inject",
                  "x-form-label": "Icon Alt Text",
                  "x-form-type": "text"
                }
              }
            }
          }
        }
      }
    }
  },
  "name": "Footer",
  "componentPath": "themecleanflex/components/footer",
  "package": "com.themecleanflex.models",
  "modelName": "Footer",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/footer",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class FooterModel extends AbstractComponent {

    public FooterModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Show Logo","x-form-type":"materialswitch"} */
	@Inject
	private String showlogo;

	/* {"type":"string","x-source":"inject","x-form-label":"Logo","x-form-type":"pathbrowser","x-form-visible":"model.showlogo == 'true'","x-form-browserRoot":"/content/assets"} */
	@Inject
	private String logo;

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Alt Text","x-form-visible":"model.showlogo == 'true'","x-form-type":"text"} */
	@Inject
	private String logoalttext;

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Url","x-form-type":"pathbrowser","x-form-visible":"model.showlogo == 'true'","x-form-browserRoot":"/content/sites"} */
	@Inject
	private String logourl;

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Size","x-form-type":"materialrange","x-form-visible":"model.showlogo == 'true'","x-form-min":1,"x-form-max":300} */
	@Inject
	private String logosize;

	/* {"type":"string","x-source":"inject","x-form-label":"Columns","x-form-type":"collection","x-form-multifield":"true","properties":{"title":{"type":"string","x-source":"inject","x-form-label":"Title","x-form-type":"text"},"text":{"type":"string","x-source":"inject","x-form-label":"Text","x-form-type":"texteditor"}}} */
	@Inject
	private List<IComponent> columns;

	/* {"type":"string","x-source":"inject","x-form-label":"Copyright Text","x-form-type":"text"} */
	@Inject
	private String copyright;

	/* {"type":"string","x-source":"inject","x-form-label":"Custom Icons Color","x-form-type":"materialswitch"} */
	@Inject
	private String iconcustomcolor;

	/* {"type":"string","x-source":"inject","x-form-label":"Icon Color","x-default":"#000000","x-form-visible":"model.iconcustomcolor == 'true'","x-form-type":"color"} */
	@Inject
	@Default(values ="#000000")
	private String iconcolor;

	/* {"type":"string","x-source":"inject","x-form-label":"Icon Size","x-form-type":"materialrange","x-default":"25","x-form-min":0,"x-form-max":150} */
	@Inject
	@Default(values ="25")
	private String iconsize;

	/* {"type":"object","x-form-type":"collection","x-form-label":"Icons","x-source":"inject","properties":{"icon":{"type":"string","x-source":"inject","x-form-label":"Icon Chooser","x-form-type":"iconbrowser","x-form-hint":"Select an icon.","x-form-required":true,"x-form-validator":"required","x-form-families":["material","font awesome"]},"url":{"type":"string","x-source":"inject","x-form-label":"Icon Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/sites"},"iconalttext":{"type":"string","x-source":"inject","x-form-label":"Icon Alt Text","x-form-type":"text"}}} */
	@Inject
	private List<IComponent> icons;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Show Logo","x-form-type":"materialswitch"} */
	public String getShowlogo() {
		return showlogo;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Logo","x-form-type":"pathbrowser","x-form-visible":"model.showlogo == 'true'","x-form-browserRoot":"/content/assets"} */
	public String getLogo() {
		return logo;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Alt Text","x-form-visible":"model.showlogo == 'true'","x-form-type":"text"} */
	public String getLogoalttext() {
		return logoalttext;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Url","x-form-type":"pathbrowser","x-form-visible":"model.showlogo == 'true'","x-form-browserRoot":"/content/sites"} */
	public String getLogourl() {
		return logourl;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Size","x-form-type":"materialrange","x-form-visible":"model.showlogo == 'true'","x-form-min":1,"x-form-max":300} */
	public String getLogosize() {
		return logosize;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Columns","x-form-type":"collection","x-form-multifield":"true","properties":{"title":{"type":"string","x-source":"inject","x-form-label":"Title","x-form-type":"text"},"text":{"type":"string","x-source":"inject","x-form-label":"Text","x-form-type":"texteditor"}}} */
	public List<IComponent> getColumns() {
		return columns;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Copyright Text","x-form-type":"text"} */
	public String getCopyright() {
		return copyright;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Custom Icons Color","x-form-type":"materialswitch"} */
	public String getIconcustomcolor() {
		return iconcustomcolor;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Icon Color","x-default":"#000000","x-form-visible":"model.iconcustomcolor == 'true'","x-form-type":"color"} */
	public String getIconcolor() {
		return iconcolor;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Icon Size","x-form-type":"materialrange","x-default":"25","x-form-min":0,"x-form-max":150} */
	public String getIconsize() {
		return iconsize;
	}

	/* {"type":"object","x-form-type":"collection","x-form-label":"Icons","x-source":"inject","properties":{"icon":{"type":"string","x-source":"inject","x-form-label":"Icon Chooser","x-form-type":"iconbrowser","x-form-hint":"Select an icon.","x-form-required":true,"x-form-validator":"required","x-form-families":["material","font awesome"]},"url":{"type":"string","x-source":"inject","x-form-label":"Icon Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/sites"},"iconalttext":{"type":"string","x-source":"inject","x-form-label":"Icon Alt Text","x-form-type":"text"}}} */
	public List<IComponent> getIcons() {
		return icons;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}

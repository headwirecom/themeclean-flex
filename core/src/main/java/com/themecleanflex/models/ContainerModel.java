package com.themecleanflex.models;

import com.peregrine.nodetypes.models.Container;
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
    "Container": {
      "type": "object",
      "x-form-groups": [
        "content",
        "style",
        "advanced"
      ],
      "x-type": "component",
      "properties": {
        "width": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Container Width",
          "x-form-group": "content",
          "x-form-type": "materialradio",
          "x-default": "auto",
          "properties": {
            "auto": {
              "x-form-name": "Auto (fill available space)",
              "x-form-value": "auto"
            },
            "custom": {
              "x-form-name": "Custom",
              "x-form-value": "custom"
            }
          }
        },
        "colspan": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Column Span (12 Columns)",
          "x-form-group": "content",
          "x-form-type": "materialrange",
          "x-form-min": 1,
          "x-form-max": 12,
          "x-form-visible": "model.width == 'custom'",
          "x-default": 12
        },
        "tabletwidth": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Container Width (Tablet)",
          "x-form-type": "materialradio",
          "x-form-group": "content",
          "x-default": "auto",
          "properties": {
            "auto": {
              "x-form-name": "Auto (fill available space)",
              "x-form-value": "auto"
            },
            "custom": {
              "x-form-name": "Custom",
              "x-form-value": "custom"
            }
          }
        },
        "tabletcolspan": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Column Span (12 Columns)",
          "x-form-group": "content",
          "x-form-type": "materialrange",
          "x-form-min": 1,
          "x-form-max": 12,
          "x-form-visible": "model.tabletwidth == 'custom'",
          "x-default": 12
        },
        "mobilewidth": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Container Width (Mobile)",
          "x-form-type": "materialradio",
          "x-form-group": "content",
          "x-default": "auto",
          "properties": {
            "auto": {
              "x-form-name": "Auto (fill available space)",
              "x-form-value": "auto"
            },
            "custom": {
              "x-form-name": "Custom",
              "x-form-value": "custom"
            }
          }
        },
        "mobilecolspan": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Column Span (12 Columns)",
          "x-form-group": "content",
          "x-form-type": "materialrange",
          "x-form-min": 1,
          "x-form-max": 12,
          "x-form-visible": "model.mobilewidth == 'custom'",
          "x-default": 12
        },
        "htmlelement": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Semantic Element",
          "x-form-type": "materialselect",
          "x-form-group": "content",
          "x-default": "section",
          "properties": {
            "section": {
              "x-form-name": "section",
              "x-form-value": "section"
            },
            "article": {
              "x-form-name": "article",
              "x-form-value": "article"
            },
            "main": {
              "x-form-name": "main",
              "x-form-value": "main"
            },
            "div": {
              "x-form-name": "div",
              "x-form-value": "div"
            },
            "header": {
              "x-form-name": "header",
              "x-form-value": "header"
            },
            "nav": {
              "x-form-name": "nav",
              "x-form-value": "nav"
            },
            "footer": {
              "x-form-name": "footer",
              "x-form-value": "footer"
            }
          }
        }
      }
    }
  },
  "name": "Container",
  "componentPath": "themecleanflex/components/container",
  "package": "com.themecleanflex.models",
  "modelName": "Container",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
	adaptables = Resource.class,
	resourceType = "themecleanflex/components/container",
	defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
	adapters = IComponent.class
)
@Exporter(name = "jackson", extensions = "json")
//GEN]
public class ContainerModel extends Container {

	public ContainerModel(Resource r) {
		super(r);
	}

	//GEN[:INJECT
	/* {"type":"string","x-source":"inject","x-form-label":"Container Width","x-form-group":"content","x-form-type":"materialradio","x-default":"auto","properties":{"auto":{"x-form-name":"Auto (fill available space)","x-form-value":"auto"},"custom":{"x-form-name":"Custom","x-form-value":"custom"}}} */
	@Inject
	@Default(values = "auto")
	private String width;

	/* {"type":"string","x-source":"inject","x-form-label":"Column Span (12 Columns)","x-form-group":"content","x-form-type":"materialrange","x-form-min":1,"x-form-max":12,"x-form-visible":"model.width == 'custom'","x-default":12} */
	@Inject
	@Default(values = "12")
	private String colspan;

	/* {"type":"string","x-source":"inject","x-form-label":"Container Width (Tablet)","x-form-type":"materialradio","x-form-group":"content","x-default":"auto","properties":{"auto":{"x-form-name":"Auto (fill available space)","x-form-value":"auto"},"custom":{"x-form-name":"Custom","x-form-value":"custom"}}} */
	@Inject
	@Default(values = "auto")
	private String tabletwidth;

	/* {"type":"string","x-source":"inject","x-form-label":"Column Span (12 Columns)","x-form-group":"content","x-form-type":"materialrange","x-form-min":1,"x-form-max":12,"x-form-visible":"model.tabletwidth == 'custom'","x-default":12} */
	@Inject
	@Default(values = "12")
	private String tabletcolspan;

	/* {"type":"string","x-source":"inject","x-form-label":"Container Width (Mobile)","x-form-type":"materialradio","x-form-group":"content","x-default":"auto","properties":{"auto":{"x-form-name":"Auto (fill available space)","x-form-value":"auto"},"custom":{"x-form-name":"Custom","x-form-value":"custom"}}} */
	@Inject
	@Default(values = "auto")
	private String mobilewidth;

	/* {"type":"string","x-source":"inject","x-form-label":"Column Span (12 Columns)","x-form-group":"content","x-form-type":"materialrange","x-form-min":1,"x-form-max":12,"x-form-visible":"model.mobilewidth == 'custom'","x-default":12} */
	@Inject
	@Default(values = "12")
	private String mobilecolspan;

	/* {"type":"string","x-source":"inject","x-form-label":"Semantic Element","x-form-type":"materialselect","x-form-group":"content","x-default":"section","properties":{"section":{"x-form-name":"section","x-form-value":"section"},"article":{"x-form-name":"article","x-form-value":"article"},"main":{"x-form-name":"main","x-form-value":"main"},"div":{"x-form-name":"div","x-form-value":"div"},"header":{"x-form-name":"header","x-form-value":"header"},"nav":{"x-form-name":"nav","x-form-value":"nav"},"footer":{"x-form-name":"footer","x-form-value":"footer"}}} */
	@Inject
	@Default(values = "section")
	private String htmlelement;

	//GEN]

	//GEN[:GETTERS
	/* {"type":"string","x-source":"inject","x-form-label":"Container Width","x-form-group":"content","x-form-type":"materialradio","x-default":"auto","properties":{"auto":{"x-form-name":"Auto (fill available space)","x-form-value":"auto"},"custom":{"x-form-name":"Custom","x-form-value":"custom"}}} */
	public String getWidth() {
		return width;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Column Span (12 Columns)","x-form-group":"content","x-form-type":"materialrange","x-form-min":1,"x-form-max":12,"x-form-visible":"model.width == 'custom'","x-default":12} */
	public String getColspan() {
		return colspan;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Container Width (Tablet)","x-form-type":"materialradio","x-form-group":"content","x-default":"auto","properties":{"auto":{"x-form-name":"Auto (fill available space)","x-form-value":"auto"},"custom":{"x-form-name":"Custom","x-form-value":"custom"}}} */
	public String getTabletwidth() {
		return tabletwidth;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Column Span (12 Columns)","x-form-group":"content","x-form-type":"materialrange","x-form-min":1,"x-form-max":12,"x-form-visible":"model.tabletwidth == 'custom'","x-default":12} */
	public String getTabletcolspan() {
		return tabletcolspan;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Container Width (Mobile)","x-form-type":"materialradio","x-form-group":"content","x-default":"auto","properties":{"auto":{"x-form-name":"Auto (fill available space)","x-form-value":"auto"},"custom":{"x-form-name":"Custom","x-form-value":"custom"}}} */
	public String getMobilewidth() {
		return mobilewidth;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Column Span (12 Columns)","x-form-group":"content","x-form-type":"materialrange","x-form-min":1,"x-form-max":12,"x-form-visible":"model.mobilewidth == 'custom'","x-default":12} */
	public String getMobilecolspan() {
		return mobilecolspan;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Semantic Element","x-form-type":"materialselect","x-form-group":"content","x-default":"section","properties":{"section":{"x-form-name":"section","x-form-value":"section"},"article":{"x-form-name":"article","x-form-value":"article"},"main":{"x-form-name":"main","x-form-value":"main"},"div":{"x-form-name":"div","x-form-value":"div"},"header":{"x-form-name":"header","x-form-value":"header"},"nav":{"x-form-name":"nav","x-form-value":"nav"},"footer":{"x-form-name":"footer","x-form-value":"footer"}}} */
	public String getHtmlelement() {
		return htmlelement;
	}
	//GEN]

	//GEN[:CUSTOMGETTERS
	//GEN]

}

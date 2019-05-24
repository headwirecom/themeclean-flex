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
    "Flexbox": {
      "type": "object",
      "x-type": "container",
      "properties": {
        "flexdirection": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Flex Direction",
          "x-form-type": "materialradio",
          "x-default": "flex-row",
          "properties": {
            "row": {
              "x-form-name": "Row",
              "x-form-value": "flex-row"
            },
            "column": {
              "x-form-name": "Column",
              "x-form-value": "flex-column"
            }
          }
        },
        "alignitems": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Align Items",
          "x-form-type": "materialradio",
          "x-default": "justify-start",
          "properties": {
            "start": {
              "x-form-name": "Start",
              "x-form-value": "justify-start"
            },
            "center": {
              "x-form-name": "Center",
              "x-form-value": "justify-center"
            },
            "end": {
              "x-form-name": "End",
              "x-form-value": "justify-end"
            },
            "between": {
              "x-form-name": "Between",
              "x-form-value": "justify-between"
            },
            "around": {
              "x-form-name": "Around",
              "x-form-value": "justify-around"
            }
          }
        },
        "justifycontent": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Justify Content",
          "x-form-type": "materialradio",
          "x-default": "justify-start",
          "properties": {
            "start": {
              "x-form-name": "Start",
              "x-form-value": "justify-start"
            },
            "center": {
              "x-form-name": "Center",
              "x-form-value": "justify-center"
            },
            "end": {
              "x-form-name": "End",
              "x-form-value": "justify-end"
            },
            "between": {
              "x-form-name": "Between",
              "x-form-value": "justify-between"
            },
            "around": {
              "x-form-name": "Around",
              "x-form-value": "justify-around"
            }
          }
        }
      }
    }
  },
  "name": "Flexbox",
  "componentPath": "themecleanflex/components/flexbox",
  "package": "com.themecleanflex.models",
  "modelName": "Flexbox",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/flexbox",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class FlexboxModel extends Container {

    public FlexboxModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Flex Direction","x-form-type":"materialradio","x-default":"flex-row","properties":{"row":{"x-form-name":"Row","x-form-value":"flex-row"},"column":{"x-form-name":"Column","x-form-value":"flex-column"}}} */
	@Inject
	@Default(values ="flex-row")
	private String flexdirection;

	/* {"type":"string","x-source":"inject","x-form-label":"Align Items","x-form-type":"materialradio","x-default":"justify-start","properties":{"start":{"x-form-name":"Start","x-form-value":"justify-start"},"center":{"x-form-name":"Center","x-form-value":"justify-center"},"end":{"x-form-name":"End","x-form-value":"justify-end"},"between":{"x-form-name":"Between","x-form-value":"justify-between"},"around":{"x-form-name":"Around","x-form-value":"justify-around"}}} */
	@Inject
	@Default(values ="justify-start")
	private String alignitems;

	/* {"type":"string","x-source":"inject","x-form-label":"Justify Content","x-form-type":"materialradio","x-default":"justify-start","properties":{"start":{"x-form-name":"Start","x-form-value":"justify-start"},"center":{"x-form-name":"Center","x-form-value":"justify-center"},"end":{"x-form-name":"End","x-form-value":"justify-end"},"between":{"x-form-name":"Between","x-form-value":"justify-between"},"around":{"x-form-name":"Around","x-form-value":"justify-around"}}} */
	@Inject
	@Default(values ="justify-start")
	private String justifycontent;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Flex Direction","x-form-type":"materialradio","x-default":"flex-row","properties":{"row":{"x-form-name":"Row","x-form-value":"flex-row"},"column":{"x-form-name":"Column","x-form-value":"flex-column"}}} */
	public String getFlexdirection() {
		return flexdirection;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Align Items","x-form-type":"materialradio","x-default":"justify-start","properties":{"start":{"x-form-name":"Start","x-form-value":"justify-start"},"center":{"x-form-name":"Center","x-form-value":"justify-center"},"end":{"x-form-name":"End","x-form-value":"justify-end"},"between":{"x-form-name":"Between","x-form-value":"justify-between"},"around":{"x-form-name":"Around","x-form-value":"justify-around"}}} */
	public String getAlignitems() {
		return alignitems;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Justify Content","x-form-type":"materialradio","x-default":"justify-start","properties":{"start":{"x-form-name":"Start","x-form-value":"justify-start"},"center":{"x-form-name":"Center","x-form-value":"justify-center"},"end":{"x-form-name":"End","x-form-value":"justify-end"},"between":{"x-form-name":"Between","x-form-value":"justify-between"},"around":{"x-form-name":"Around","x-form-value":"justify-around"}}} */
	public String getJustifycontent() {
		return justifycontent;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}

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
      "x-type": "component",
      "properties": {
        "select": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Choose Type",
          "x-form-type": "materialselect",
          "properties": {
            "type1": {
              "x-form-name": "Row",
              "x-form-value": "flex-row"
            },
            "type2": {
              "x-form-name": "Column",
              "x-form-value": "flex-column"
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
public class FlexboxModel extends AbstractComponent {

    public FlexboxModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Choose Type","x-form-type":"materialselect","properties":{"type1":{"x-form-name":"Row","x-form-value":"flex-row"},"type2":{"x-form-name":"Column","x-form-value":"flex-column"}}} */
	@Inject
	private String select;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Choose Type","x-form-type":"materialselect","properties":{"type1":{"x-form-name":"Row","x-form-value":"flex-row"},"type2":{"x-form-name":"Column","x-form-value":"flex-column"}}} */
	public String getSelect() {
		return select;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}

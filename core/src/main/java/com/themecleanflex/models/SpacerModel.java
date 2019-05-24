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
    "Spacer": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "height": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Height",
          "x-form-type": "materialrange",
          "x-form-min": 0,
          "x-form-max": 100
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
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class SpacerModel extends AbstractComponent {

    public SpacerModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Height","x-form-type":"materialrange","x-form-min":0,"x-form-max":100} */
	@Inject
	private String height;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Height","x-form-type":"materialrange","x-form-min":0,"x-form-max":100} */
	public String getHeight() {
		return height;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}

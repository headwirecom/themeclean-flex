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
    "Tags": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "label": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Label"
        },
        "landing": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Tag Landing Page",
          "x-form-type": "pathbrowser"
        }
      }
    }
  },
  "name": "Tags",
  "componentPath": "themecleanflex/components/tags",
  "package": "com.themecleanflex.models",
  "modelName": "Tags",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/tags",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class TagsModel extends AbstractComponent {

    public TagsModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Label"} */
	@Inject
	private String label;

	/* {"type":"string","x-source":"inject","x-form-label":"Tag Landing Page","x-form-type":"pathbrowser"} */
	@Inject
	private String landing;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Label"} */
	public String getLabel() {
		return label;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Tag Landing Page","x-form-type":"pathbrowser"} */
	public String getLanding() {
		return landing;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}

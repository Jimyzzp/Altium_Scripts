// for layers, refer to http://techdocs.altium.com/display/SCRT/PCB+API+Types#TLayer
//  1 eTopLayer
//  2 eMidLayer1
// 31 eMidLayer30
// 32 eBottomLayer
// 57 eMechanical1
// 72 eMechanical16

function OKClick(Sender) {
  var topBottomLayerNumber;

  if (radioTop.Checked) {
    topBottomLayerNumber = 1;
  } else {
    topBottomLayerNumber = 32;
  }
  mechanicalPairs(topBottomLayerNumber, Number(fromLayer.Text)+56, Number(toLayer.Text)+56);
  Close();
}

function mechanicalPairs(compLayer, fromLayer, toLayer) {
  var board, comp_iterator, component, prim_iterator, prim;

  board = PCBServer.GetCurrentPCBBoard();

  if (board != Null) {
    PCBServer.PreProcess(); // start of undo unit

    comp_iterator = board.BoardIterator_Create();
    comp_iterator.AddFilter_ObjectSet(MkSet(eComponentObject));
    comp_iterator.AddFilter_LayerSet(MkSet(compLayer));
    comp_iterator.AddFilter_Method(eProcessAll);

    component = comp_iterator.FirstPCBObject();

    while (component != Null) {
      prim_iterator = component.GroupIterator_Create();
      prim_iterator.AddFilter_ObjectSet(MkSet(eArcObject, ePadObject, eViaObject, eTrackObject, eTextObject, eFillObject, eConnectionObject, eNetObject, eComponentObject, ePolyObject, eRegionObject, eComponentBodyObject, eDimensionObject, eCoordinateObject, eClassObject, eRuleObject, eFromToObject, eDifferentialPairObject, eViolationObject, eEmbeddedObject, eEmbeddedBoardObject, eTraceObject, eSpareViaObject, eBoardObject, eBoardOutlineObject));
      prim_iterator.AddFilter_LayerSet(MkSet(fromLayer));
      prim = prim_iterator.FirstPCBObject();
      while (prim != Null) {
        if (prim.Layer == fromLayer) {  // added if condition because AddFilter_LayerSet above does not work as expected - but why???
          prim.Layer = toLayer;
        }
        prim = prim_iterator.NextPCBObject();
      }
      component.GroupIterator_Destroy(prim_iterator);
      component = comp_iterator.NextPCBObject();
    }
    board.BoardIterator_Destroy(comp_iterator);

    PCBServer.PostProcess();  // end of undo unit
  }
}


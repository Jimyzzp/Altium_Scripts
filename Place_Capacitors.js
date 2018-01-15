function OKClick(Sender) {
  placeCapacitors(Number(Parallel.Text), Number(Series.Text), Number(StartRefDes.Text), Number(Rotation.Text), Number(DistanceX.Text), Number(DistanceY.Text), Number(StartX.Text), Number(StartY.Text), Number(Expansion.Text), Number(Clearance.Text));
}

function placeCapacitors(parallel, series, startRefDes, rotation, distX, distY, startX, startY, expansion, clearance) {
  var board;
  var cap;
  var refDes;
  var polygon;
  var polyPoint0, polyPoint1, polyPoint2, polyPoint3;

//  showmessage(distX);
//  ws = GetWorkSpace();
//  mm = ws.DM_MessagesManager;
//  mm.ClearMessages();
//  mm.BeginUpdate();
//  mm.AddMessage('C2', 'T2', 'Altium Designer Msg', 'Doc 2', '', '', 3, false);;
//  mm.EndUpdate();
//  ws.DM_ShowMessageView();

  board = PCBServer.GetCurrentPCBBoard();

  if (board != Null) {
    PCBServer.PreProcess(); // start of undo unit

    polyPoint0 = TPolySegment();
    polyPoint0.Kind = ePolySegmentLine;
    polyPoint1 = TPolySegment();
    polyPoint1.Kind = ePolySegmentLine;
    polyPoint2 = TPolySegment();
    polyPoint2.Kind = ePolySegmentLine;
    polyPoint3 = TPolySegment();
    polyPoint3.Kind = ePolySegmentLine;

    for (i=0; i<=series; i++) {
      if (i<series) {
        for (j=0; j<parallel; j++) {
          refDes = startRefDes+i*parallel+j;
          cap = board.GetPcbComponentByRefDes("C"+refDes);
          if (cap != Null) {
            cap.X = board.XOrigin + MMsToCoord(startX + j*distX);
            cap.Y = board.YOrigin + MMsToCoord(startY - i*distY);
            cap.Rotation = rotation;
          }
        }
      }
      polyPoint0.vx = board.XOrigin + MMsToCoord(startX-expansion);
      polyPoint0.vy = board.YOrigin + MMsToCoord(startY-(i-1)*distY-clearance/2);
      polyPoint1.vx = board.XOrigin + MMsToCoord(startX+(parallel-1)*distX+expansion);
      polyPoint1.vy = board.YOrigin + MMsToCoord(startY-(i-1)*distY-clearance/2);
      polyPoint2.vx = board.XOrigin + MMsToCoord(startX+(parallel-1)*distX+expansion);
      polyPoint2.vy = board.YOrigin + MMsToCoord(startY-(i)*distY+clearance/2);
      polyPoint3.vx = board.XOrigin + MMsToCoord(startX-expansion);
      polyPoint3.vy = board.YOrigin + MMsToCoord(startY-(i)*distY+clearance/2);
      polygon = PCBServer.PCBObjectFactory(ePolyObject, eNoDimension, eCreate_Default);
      polygon.SetState_PointCount(4);
      polygon.SetState_Segments(0, polyPoint0);
      polygon.SetState_Segments(1, polyPoint1);
      polygon.SetState_Segments(2, polyPoint2);
      polygon.SetState_Segments(3, polyPoint3);
      polygon.SetState_Segments(4, polyPoint0);
      board.AddPCBObject(polygon);
      polygon.Rebuild();
    }

    PCBServer.PostProcess();  // end of undo unit
    Client.SendMessage('PCB:Zoom', 'Action=Redraw' , 255, Client.CurrentView);  // redraw PCB
  }
}


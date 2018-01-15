object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Place Capacitors'
  ClientHeight = 166
  ClientWidth = 305
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 8
    Top = 30
    Width = 38
    Height = 13
    Caption = 'Parallel:'
  end
  object Label2: TLabel
    Left = 176
    Top = 30
    Width = 33
    Height = 13
    Caption = 'Series:'
  end
  object Label3: TLabel
    Left = 8
    Top = 6
    Width = 69
    Height = 13
    Caption = 'Start Ref Des:'
  end
  object Label4: TLabel
    Left = 176
    Top = 6
    Width = 45
    Height = 13
    Caption = 'Rotation:'
  end
  object Label5: TLabel
    Left = 8
    Top = 54
    Width = 54
    Height = 13
    Caption = 'Distance X:'
  end
  object Label6: TLabel
    Left = 176
    Top = 54
    Width = 54
    Height = 13
    Caption = 'Distance Y:'
  end
  object Label7: TLabel
    Left = 8
    Top = 78
    Width = 37
    Height = 13
    Caption = 'Start X:'
  end
  object Label8: TLabel
    Left = 176
    Top = 78
    Width = 37
    Height = 13
    Caption = 'Start Y:'
  end
  object Label9: TLabel
    Left = 8
    Top = 102
    Width = 70
    Height = 13
    Caption = 'Expansion (X):'
  end
  object Label10: TLabel
    Left = 176
    Top = 102
    Width = 69
    Height = 13
    Caption = 'Clearance (Y):'
  end
  object Parallel: TEdit
    Left = 83
    Top = 27
    Width = 50
    Height = 21
    NumbersOnly = True
    TabOrder = 2
    Text = '0'
  end
  object Series: TEdit
    Left = 251
    Top = 27
    Width = 50
    Height = 21
    NumbersOnly = True
    TabOrder = 3
    Text = '0'
  end
  object OK: TButton
    Left = 250
    Top = 136
    Width = 50
    Height = 25
    Caption = 'OK'
    TabOrder = 10
    OnClick = OKClick
  end
  object StartRefDes: TEdit
    Left = 83
    Top = 3
    Width = 50
    Height = 21
    NumbersOnly = True
    TabOrder = 0
    Text = '1'
  end
  object Rotation: TEdit
    Left = 251
    Top = 3
    Width = 50
    Height = 21
    NumbersOnly = True
    TabOrder = 1
    Text = '90'
  end
  object DistanceX: TEdit
    Left = 83
    Top = 51
    Width = 50
    Height = 21
    NumbersOnly = True
    TabOrder = 4
    Text = '0'
  end
  object DistanceY: TEdit
    Left = 251
    Top = 51
    Width = 50
    Height = 21
    NumbersOnly = True
    TabOrder = 5
    Text = '0'
  end
  object StartX: TEdit
    Left = 83
    Top = 75
    Width = 50
    Height = 21
    NumbersOnly = True
    TabOrder = 6
    Text = '0'
  end
  object StartY: TEdit
    Left = 251
    Top = 75
    Width = 50
    Height = 21
    NumbersOnly = True
    TabOrder = 7
    Text = '0'
  end
  object Expansion: TEdit
    Left = 83
    Top = 99
    Width = 50
    Height = 21
    NumbersOnly = True
    TabOrder = 8
    Text = '1.5'
  end
  object Clearance: TEdit
    Left = 251
    Top = 99
    Width = 50
    Height = 21
    NumbersOnly = True
    TabOrder = 9
    Text = '1.6'
  end
end

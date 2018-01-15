object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Mechanical Pairs'
  ClientHeight = 136
  ClientWidth = 215
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
    Left = 9
    Top = 54
    Width = 109
    Height = 13
    Caption = 'From Mechanical Layer'
  end
  object Label2: TLabel
    Left = 9
    Top = 78
    Width = 97
    Height = 13
    Caption = 'To Mechanical Layer'
  end
  object RadioGroup1: TRadioGroup
    Left = 3
    Top = 0
    Width = 133
    Height = 48
    Caption = 'Component Layer Filter'
    TabOrder = 0
  end
  object radioTop: TRadioButton
    Left = 15
    Top = 20
    Width = 41
    Height = 17
    Caption = 'Top'
    TabOrder = 1
  end
  object radioBot: TRadioButton
    Left = 79
    Top = 20
    Width = 57
    Height = 17
    Caption = 'Bottom'
    Checked = True
    TabOrder = 2
    TabStop = True
  end
  object fromLayer: TEdit
    Left = 124
    Top = 51
    Width = 36
    Height = 21
    TabOrder = 3
    Text = '15'
  end
  object toLayer: TEdit
    Left = 124
    Top = 75
    Width = 36
    Height = 21
    TabOrder = 4
    Text = '16'
  end
  object Button1: TButton
    Left = 104
    Top = 103
    Width = 57
    Height = 25
    Caption = 'OK'
    TabOrder = 5
    OnClick = OKClick
  end
end

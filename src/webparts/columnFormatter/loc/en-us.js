define([], function() {
  return {
    //Property Pane
    PropertyBasicGroupName: "Properties",
    PropertyHeightLabel: "Height",

    //General
    FeatureUnavailableFromLocalWorkbench: 'This feature is not available from the local workbench',
    TechnicalDetailsErrorHeader: 'Technical Details',
    WizardDefaultField: 'MyField',

    //Welcome
    WelcomeTitle: 'Column Formatter',
    WelcomeSubTitle: 'Easy editor for modern listview Column Formatting',
    WelcomeNewHeader: 'New',
    WelcomeNewDescription: 'Start with a blank canvas or choose from a template',
    WelcomeOpenHeader: 'Open',
    WelcomeOpenDescription: 'Load from a library or pull from a local list',
    WelcomeNewColumnTypeLabel: 'Column Type',
    WelcomeNewWizardOption: 'Start with a template',
    WelcomeNewBlankOption: 'Start from scratch',
    WelcomeNewNoTemplates: 'No templates available for the choosen column type',
    WelcomeBackButton: 'Back',
    WelcomeOKButton: 'OK',
    WelcomeNextButton: 'Next',
    WelcomeOpenLoadList: 'Load from a local list',
    WelcomeOpenLoadFile: 'Load from a file:',
    WelcomeOpenColumnTypeLabel: 'Column Type',
    WelcomeOpenLoadFileLibrary: 'Open a file from a local library',
    WelcomeOpenLoadFileUpload: 'Upload a file',
    WelcomeUploadHeader: 'File Upload',
    WelcomeUploadInstructions1: 'Drop your json file here, or click to select the file to upload.',
    WelcomeUploadInstructions2: 'Only *.json files will be accepted',
    WelcomeUploadUploadButton: 'Choose a File',
    WelcomeUploadRejectError: 'Unable to accept',
    WelcomeUploadEmptyFileError: 'File is empty!',
    WelcomeLoadFromListLoadingLists: 'Loading Lists...',
    WelcomeLoadFromListListLabel: 'Local list',
    WelcomeLoadFromListFieldLabel: 'Field',
    WelcomeLoadFromListLoading: 'Loading from list...',
    WelcomeLoadFromListLoadingListsError: 'Error while loading lists!',
    WelcomeLoadFromListLoadingError: 'Error while loading!',
    WelcomeLoadFromLibraryLoadingLibraries: 'Loading Libraries...',
    WelcomeLoadFromLibraryLibraryLabel: 'Local library',
    WelcomeLoadFromLibraryFolderPathLabel: 'Folder Path',
    WelcomeLoadFromLibraryFilenameLabel: 'Filename',
    WelcomeLoadFromLibraryLoading: 'Loading from Library...',
    WelcomeLoadFromLibraryLoadingLibrariesError: 'Error while loading libraries!',
    WelcomeLoadFromLibraryLoadingError: 'Error while loading! Verify the folderpath is correct (if used) and that you have permission to access this library.',

    //Tab Names
    TabWizard: "Wizard",
    TabTree: "Tree",
    TabData: "Data",
    TabPreview: "Preview",
    TabCode: "Code",
    TabSplit: "Side by Side",

    //Panel Headers
    PanelHeaderData: "Test Values",
    PanelHeaderPreview: "Preview",
    PanelHeaderCode: "Code Editor",

    //Editor CommandBar
    CommandNew: 'New',
    CommandCustomize: 'Customize',
    CommandEditor: 'Theme',
    CommandSaveAs: 'Save As',
    CommandDownload: 'Download',
    CommandCopy: 'Copy to clipboard',
    CommandSaveToLibrary: 'Save to local library',
    CommandApplyToList: 'Apply to local list field',
    CommandSave: 'Save',

    //New Confirmation Dialog
    NewConfirmationDialogTitle: 'Start Fresh?',
    NewConfirmationDialogText: 'Any unsaved changes will be lost. Do you want to continue?',
    NewConfirmationDialogConfirmButton: 'Yes',
    NewConfirmationDialogCancelButton: 'Cancel',

    //Customize Confirmation Dialog
    CustomizeConfirmationDialogTitle: 'Remove Wizard?',
    CustomizeConfirmationDialogText: 'You will be able to edit the code directly, but the wizard pane will no longer be available. This is for advanced users. Are you sure?',
    CustomizeConfirmationDialogConfirmButton: 'Yes',
    CustomizeConfirmationDialogCancelButton: 'Cancel',

    //Save To Library Dialog
    SaveToLibraryDialogTitle: 'Save to local library',
    SaveToLibraryDialogConfirmButton: 'Save',
    SaveToLibraryDialogCancelButton: 'Cancel',
    SaveToLibraryLoading: 'Loading Libraries...',
    SaveToLibraryLibraryLabel: 'Local library',
    SaveToLibraryFolderPathLabel: 'Folder Path (optional)',
    SaveToLibraryFilenameLabel: 'Filename',
    SaveToLibrarySaving: 'Saving to Library...',
    SaveToLibraryLoadError: 'Error while loading libraries!',
    SaveToLibrarySaveError: 'Error while saving! Verify the folderpath is correct (if used) and that you have permission to save to this library.',

    //Apply To List Dialog
    ApplyToListDialogTitle: 'Apply to local list field',
    ApplyToListDialogConfirmButton: 'Save',
    ApplyToListDialogCancelButton: 'Cancel',
    ApplyToListLoading: 'Loading Lists...',
    ApplyToListListLabel: 'Local list',
    ApplyToListFieldLabel: 'Field',
    ApplyToListApplying: 'Applying to list...',
    ApplyToListLoadError: 'Error while loading lists!',
    ApplyToListApplyError: 'Error while applying! Verify you have permission to update this library\'s settings.',

    //Copy
    CopyToClipboardError: 'Unable to copy!',

    //Data Column/Row buttons
    DeleteRow: "Delete Row",
    AddRow: "Add Row",
    DeleteColumn: "Delete Field",
    AddColumn: "Add Field",

    //Data Column Editing
    ColumnNameChangeTooltip: "Internal field name",
    ColumnTypeHeadline: "Column Type",
    ColumnTypeMessage: "Changing the type will also reset the values",
    ColumnTypeChangeTooltip: "Click to change",
    SubPropertiesHeadline: "Sub Properties",
    TimeHeadline: "Time",
    DataColumnDefaultName: "NewField",
    DataColumnLinkDescriptionLabel: 'desc:',
    DataColumnLookupIdLabel: 'lookupId:',
    DataColumnPersonIdLabel: 'id:',
    DataColumnPersonEmailLabel: 'email:',
    DataColumnPersonSIPLabel: 'sip:',
    DataColumnPersonPictureLabel: 'picture:',

    //Column Type Names
    ColumnTypeBoolean: "Yes/No",
    ColumnTypeChoice: "Choice",
    ColumnTypeDateTime: "Date/Time",
    ColumnTypeLink: "Hyperlink",
    ColumnTypePicture: "Picture",
    ColumnTypeLookup: "Lookup",
    ColumnTypeNumber: "Number",
    ColumnTypePerson: "Person",
    ColumnTypeText: "Text",
    ColumnTypeUnknown: "Unknown",

    //Boolean Values
    BoolValueStringTrue: "Yes",
    BoolValueStringFalse: "No",

    //DateTime Editor Strings
    Month1: "January",
    Month2: "February",
    Month3: "March",
    Month4: "April",
    Month5: "May",
    Month6: "June",
    Month7: "July",
    Month8: "August",
    Month9: "September",
    Month10: "October",
    Month11: "November",
    Month12: "December",
    Month1Short: "Jan",
    Month2Short: "Feb",
    Month3Short: "Mar",
    Month4Short: "Apr",
    Month5Short: "May",
    Month6Short: "Jun",
    Month7Short: "Jul",
    Month8Short: "Aug",
    Month9Short: "Sep",
    Month10Short: "Oct",
    Month11Short: "Nov",
    Month12Short: "Dec",
    Day1: "Sunday",
    Day2: "Monday",
    Day3: "Tuesday",
    Day4: "Wednesday",
    Day5: "Thursday",
    Day6: "Friday",
    Day7: "Saturday",
    Day1Short: "S",
    Day2Short: "M",
    Day3Short: "T",
    Day4Short: "W",
    Day5Short: "T",
    Day6Short: "F",
    Day7Short: "S",
    DTgoToToday: "Go to today",
    DTprevMonthAriaLabel: "Go to previous month",
    DTnextMonthAriaLabel: "Go to next month",
    DTprevYearAriaLabel: "Go to previous year",
    DTnextYearAriaLabel: "Go to next year",
    HourLabel: "Hour",
    MinuteLabel: "Minute",
    SecondsLabel: "Seconds",

    //Custom Formatting Error Strings
    CFSariaError: "No aria- tags found. As such, the field will not be accessible via a screen reader.",
    CFSelmTypeInvalid: "Invalid elmType: {0}. Must be one of {1}.",
    CFSelmTypeMissing: "Must specify elmType.",
    CFSinvalidProtocol: "A URL was blocked. Only http, https and mailto protocols are allowed.",
    CFSinvalidStyleAttribute: "'{0}' is not a supported style attribute.",
    CFSinvalidStyleValue: "The style values '{0}' contains one or more of the following disallowed characters ( : & ; ! .",
    CFSnan: "{0} is not a number. Number expected in the expression {1}.",
    CFSoperandMissing: "There must be at least 1 operand in the expression {0}.",
    CFSoperandNOnly: "Expecting {0} operand(s) for the expression {1}.",
    CFSoperatorInvalid: "'{0}' is not a valid operator. It must be one of {1} in the expression {2}.",
    CFSoperatorMissing: "Missing operator in expression: {0}.",
    CFSunsupportedType: "The type of field {0} is unsupported at this time.",
    CFSuserFieldError: "The field '{0}' is of type 'User', and can't be used directly because it has sub-properties. You need to specify which sub-property you want to use. e.g. [$AssignedTo.email]",
    CFSRowLabel: 'Row',

    //Format Validation Messages
    PreviewValidationGood: 'Validation Passed!',
    PreviewValidationBad: 'Invalid JSON (Code):',

    //Tree View
    TreeViewHeader: 'Elements Tree',
    TreeViewError: 'Error Loading Tree!',

    //Wizard Data Bars
    WizardDataBarsName: 'Data Bars',
    WizardDataBarsDescription: 'Adds horizontal bars to the field to visually express the value by length',
    WizardDataBarsEmptyBarLabel: 'Low:',
    WizardDataBarsEmptyBarTooltip: 'The lowest value on the scale\nValues equal or lower than this will be shown as 0% full',
    WizardDataBarsFullBarLabel: 'High:',
    WizardDataBarsFullBarTooltip: 'The highest value on the scale\nValues equal or higher than this will be shown as 100% full',
    WizardDataBarsRangeGroupLabel: 'Range',
    WizardDataBarsValueDisplayGroupLabel: 'Value Display',
    WizardDataBarsValueDisplayActual: 'Show Actual Value',
    WizardDataBarsValueDisplayPercentage: 'Show Percentage',
    WizardDataBarsValueDisplayNone: 'None',

    //Wizard Checkboxes
    WizardCheckboxesName: 'Checkboxes',
    WizardCheckboxesDescription: 'Displays Yes/No fields as checkboxes',

    //Wizard Overdue
    WizardOverdueName: 'Overdue',
    WizardOverdueDescription: 'Colors the field red once the date is greater than today',

    //Wizard Number Trending
    WizardNumberTrendingName: '# Trending',
    WizardNumberTrendingDescription: 'Compares other fields in the row to provide an icon based on trending values',
    WizardNumberTrendingCurrent: 'Current',
    WizardNumberTrendingPrevious: 'Previous',

    //Wizard Action Link
    WizardActionLinkName: 'Action Link',
    WizardActionLinkDescription: 'Adds a Quick Action icon to a link',

    //Wizard Severity
    WizardSeverityName: 'Severity',
    WizardSeverityDescription: 'Conditionally applies the severity styles based on the field\'s value',
    WizardSeverityGood: 'Done',
    WizardSeverityLow: 'In progress',
    WizardSeverityWarning: 'In review',
    WizardSeveritySevereWarning: 'Has issues',
    WizardSeverityBlocked: 'Blocked',
    WizardSeverityOther: 'Other Value',
    WizardSeverityGroupValues: 'Conditional Values',
    WizardSeverityGoodLabel: 'Good',
    WizardSeverityLowLabel: 'Low',
    WizardSeverityWarningLabel: 'Warning',
    WizardSeveritySevereWarningLabel: 'Severe Warning',
    WizardSeverityBlockedLabel: 'Blocked',
    WizardSeverityDefaultSeverityLabel: 'Default Severity',
    WizardSeverityGroupDisplay: 'Display',
    WizardSeverityValueVisible: 'Value Visible',
    WizardSeverityValueHidden: 'Value Hidden',
    WizardSeverityIconVisible: 'Icon Visible',
    WizardSeverityIconHidden: 'Icon Hidden',

    //Wizard Current User
    WizardCurrentUserName: 'Current User',
    WizardCurrentUserDescription: 'Highlights the current user',

    //Wizard Round Image
    WizardRoundImageName: 'Round Image',
    WizardRoundImageDescription: 'Displays the picture / user picture as a circle',

    //Wizard Mail To
    WizardMailToName: 'Mail To',
    WizardMailToDescription: 'Creates a link to launch an email',
    WizardMailToGroupDisplay: 'Display',
    WizardMailToDisplayValue: 'Text',
    WizardMailToGroupParameters: 'Parameters',
    WizardMailToSubject: 'Subject',
    WizardMailToBody: 'Body',
    WizardMailToBCC: 'bcc',
    WizardMailToCC: 'cc',
    WizardMailToIconLink: 'Icon Link',
    WizardMailToTextLink: 'Text Link',

    //Wizard Mini Map
    WizardMiniMapName: 'Mini Map',
    WizardMiniMapDescription: 'Displays a tiny map image for a location (be sure to use your own API key)'
  }
});
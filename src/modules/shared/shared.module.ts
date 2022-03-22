import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NG PRIME MODULES
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { TimelineModule } from 'primeng/timeline';
import { PickListModule } from 'primeng/picklist';
import { FieldsetModule } from 'primeng/fieldset';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TreeModule } from 'primeng/tree';
import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';
import { DividerModule } from 'primeng/divider';

@NgModule({
  exports: [
    // ANGULAR MODULES
    FormsModule,
    ReactiveFormsModule,

    // NG PRIME MODULES
    InputTextModule,
    ButtonModule,
    PanelModule,
    CardModule,
    MessagesModule,
    TooltipModule,
    MenuModule,
    SlideMenuModule,
    TieredMenuModule,
    TableModule,
    TabMenuModule,
    MessageModule,
    AccordionModule,
    ProgressSpinnerModule,
    TabViewModule,
    DialogModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    MultiSelectModule,
    InputSwitchModule,
    CheckboxModule,
    DynamicDialogModule,
    TriStateCheckboxModule,
    SelectButtonModule,
    ToastModule,
    CarouselModule,
    TimelineModule,
    PickListModule,
    FieldsetModule,
    KeyFilterModule,
    AutoCompleteModule,
    InputNumberModule,
    PaginatorModule,
    TagModule,
    ConfirmDialogModule,
    ContextMenuModule,
    TreeModule,
    EditorModule,
    InputMaskModule,
    DividerModule,
  ],
})
export class SharedModule {}

<template>
  <div class="flex gap-4">
    <!-- Panel Izquierdo -->
    <div class="w-1/4">
      <div class="mb-4">
        <h3 class="mb-2 font-semibold">Autores</h3>
        <Button label="Libros" class="p-button-sm w-full mb-2 p-button-info" />
        <div class="flex gap-2 mb-2">
          <Button label="Nuevo" class="p-button-success p-button-sm w-1/2" />
          <Button label="Borrar" class="p-button-danger p-button-sm w-1/2" />
        </div>
        <Listbox :options="bookList" v-model="selectedBook" class="w-full mb-3" />
        <div class="flex gap-2">
          <Button label="Editoriales" class="p-button-secondary p-button-sm w-1/2" />
          <Button label="Clasificación" class="p-button-secondary p-button-sm w-1/2" />
        </div>
      </div>
    </div>

    <!-- Panel Derecho -->
    <div class="w-3/4">
      <TabView>
        <TabPanel header="Autor">
          <div class="p-fluid formgrid grid">
            <div class="field col-12">
              <label>Nombre del autor</label>
              <InputText v-model="author.name" />
            </div>
            <div class="field col-12">
              <label>Nacionalidad</label>
              <InputText v-model="author.nationality" />
            </div>
            <div class="field col-12">
              <label>Biografía</label>
              <InputText v-model="author.biography" />
            </div>
            <div class="field col-12 flex justify-end gap-2">
              <Button label="Cancelar" class="p-button-secondary p-button-sm" />
              <Button label="Guardar" class="p-button-success p-button-sm" />
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Libro">
          <div class="p-fluid formgrid grid">
            <div class="field col-12">
              <label>Nombre</label>
              <InputText v-model="book.name" />
            </div>
            <div class="field col-6">
              <label>ISBN</label>
              <InputText v-model="book.isbn" />
            </div>
            <div class="field col-3">
              <label>Año</label>
              <InputText v-model="book.year" />
            </div>
            <div class="field col-3">
              <label>Edición</label>
              <Dropdown :options="editions" option-label="label" v-model="book.edition" />
            </div>
            <div class="field col-12">
              <label>Editorial:  </label>
              <a href="#" class="text-blue-500">{{ book.editorial }}</a>
              <Button label="Cambiar editorial" class="p-button-sm ml-2" />
            </div>
            <div class="field col-12">
              <label>Autores</label>
              <Listbox :options="book.authors" multiple class="w-full mb-2" />
              <div class="flex gap-2">
                <Button label="Agregar autor" class="p-button-sm" />
                <Button label="Eliminar autor" class="p-button-danger p-button-sm" />
              </div>
            </div>
            <div class="field col-12 flex justify-end gap-2">
              <Button label="Cancelar" class="p-button-secondary p-button-sm" />
              <Button label="OK" class="p-button-success p-button-sm" />
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Editorial">
          <div class="p-fluid formgrid grid">
            <div class="field col-12">
              <label>Nombre de la editorial</label>
              <InputText v-model="editorial.name" />
            </div>
            <div class="field col-12">
              <label>País</label>
              <InputText v-model="editorial.country" />
            </div>
            <div class="field col-12">
              <label>Dirección</label>
              <InputText v-model="editorial.address" />
            </div>
            <div class="field col-12 flex justify-end gap-2">
              <Button label="Cancelar" class="p-button-secondary p-button-sm" />
              <Button label="Guardar" class="p-button-success p-button-sm" />
            </div>
          </div>
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Listbox from 'primevue/listbox'
import Dropdown from 'primevue/dropdown'

export default {
  components: {
    TabView,
    TabPanel,
    InputText,
    Button,
    Listbox,
    Dropdown
  },
  setup() {
    const bookList = ref([
      'La casa de los espíritus',
      'El Conde Drácula',
      'Las aventuras de Tom Sawyer',
      'Alicia en el país de las maravillas'
    ])

    const selectedBook = ref('Las aventuras de Tom Sawyer')

    const book = ref({
      name: 'Las aventuras de Tom Sawyer',
      isbn: '12244-5678-45',
      year: '2004',
      edition: { label: '5' },
      editorial: 'Ediciones Alfaguara',
      authors: ['Mark Twain']
    })

    const editions = ref([
      { label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }, { label: '5' }, { label: '6' }
    ])

    const author = ref({
      name: 'Mark Twain',
      nationality: 'Estadounidense',
      biography: 'Autor de Las aventuras de Tom Sawyer'
    })

    const editorial = ref({
      name: 'Ediciones Alfaguara',
      country: 'España',
      address: 'Calle Ficticia 123, Madrid'
    })

    return {
      bookList,
      selectedBook,
      book,
      editions,
      author,
      editorial
    }
  }
}
</script>

<script setup lang="ts">
import products from '@/views/dashboards/default/productos.json'; // Asegúrate de la ruta correcta

const cards = products.map((product: any) => ({
  ...product,
   // Resuelve la ruta de la imagen
}));
</script>

<template>
  <v-row dense>
    <v-col
      v-for="card in cards"
      :key="card.title"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card
        elevation="1"
      >
        <v-card-title class="text-h5" v-text="card.title"></v-card-title>
        <!-- <v-img
          src=""
          class="align-end"
          gradient="to bottom, rgba(0,128,0,.05), rgba(255,165,0,.2)"
          height="160px"
          cover
        >
        </v-img> -->
        <v-card-subtitle class="mt-2 mb-n5 font-weight-bold font-italic">
          Ingredientes:
        </v-card-subtitle>
        <v-card-text class="mb-n5 font-italic">
          {{ card.ingredientes }}
        </v-card-text>
        <v-card-actions>
            <v-btn
              class="mx-2 text-h5 font-italic"
              color="secondary"
              variant="tonal"
              readonly
              width="100"
              density="comfortable"
            >
              <ScaleIcon size="15" />
              {{card.gramos}}
            </v-btn>
          <v-spacer />
            <v-btn
              class="mx-2 text-h5 font-italic"
              color="primary"
              variant="tonal"
              readonly
              min-width="120"
              density="comfortable"
            >
              <BrandCashappIcon size="15" />
              {{card.precio}}
            </v-btn>
          <v-spacer />
          <v-dialog
            transition="dialog-bottom-transition"
            width="auto"
          >
            <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              text="Transition from Bottom"
              color="primary"
              size="small"
              variant="outlined"
              class="mr-2"
              elevation="2"
              icon
            >
              <BrandGoogleFitIcon size="16" />
            </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card>
                <v-card-text class="text-body-1 mb-n5">Propiedades:</v-card-text>
                <v-card-text class="text-h5 px-5 mb-n5">
                  {{card.propiedades}}
                  <br/>
                  {{card.porciones}}
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn
                    text="Cerrar"
                    @click="isActive.value = false"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-card-actions>
      </v-card>
      
    </v-col>
  </v-row>
</template>

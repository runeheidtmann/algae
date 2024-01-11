<template>
  <v-container class="d-flex flex-column fill-height justify-between w-50">
    <div class="d-flex w-100 mb-5 text-body-1">
      <div class="mr-5">RU</div>
      <div>
        <div class="font-weight-medium">You</div>
        <div>
          In the context of hydrogen, what is going on with the acronym THEUS?
        </div>
      </div>
    </div>
    <div class="d-flex w-100 mb-5 text-body-1">
      <div class="mr-5">AB</div>
      <div>
        <div class="font-weight-medium">AlgaeBrain</div>
        <div>
          THEUS stands for Totalized Hydrogen Energy Utilization System.
          <v-dialog width="800">
            <template v-slot:activator="{ props }">
              <a v-bind="props" text="[>_source]" class="text-indigo-darken-4">
              </a>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card
                title="Practices and Perspectives in Sustainable Bioenergy"
              >
                <v-card-text>
                  Chapter 31\nWater Is the Ultimate Source of Hydrogen\nEnergy:
                  Scientiﬁc Citations and Quotations\nHussein K. Abdel-Aal and
                  Nejat Veziroglu\nAbstract From the ancient times, mankind has
                  always been aware that all life on\nearth depends upon water,
                  the principal ingredient of all living cells. Its importancein
                  forming the creation in all of its aspects in general and the
                  living creatures in\nparticular, as well as human kind,
                  animals, and plants, is evident to all of us. It is\nhighly
                  important to know that water has played a major role for human
                  kind. When\nthe Ionian philosopher Thales of Miletus (624–545
                  BC) replaced the Gods withNatural Laws as the force governing
                  all phenomena; he made water the central\nelement in his
                  theory.\nThis chapter addresses the issue that water, besides
                  its indispensable usage by\nhuman beings in drinking and in
                  everyday life, is the key element in providing lifewith
                  energy, in the form of hydrogen .\nThe main aim of this work
                  is to shed some light on the relationship between\nhydrogen,
                  water, and energy. A review of some scientiﬁc unique physical
                  and\npowerful properties of water is presented. The high
                  speciﬁc heat, caused by\nhydrogen bonding, is behind the
                  resistance to temperature change. Its availabilityfor mankind
                  made it the standard of the thermometric scale. Next, the work
                  presents\nto the community of scientists some scientiﬁc
                  citations and quotations that supportour statement that water
                  is the ultimate source of hydrogen energy.\nNewton, an avid
                  alchemist set forth in De Natura Acidorium, views that
                  all\nsubstances can be reduced to water. Eventually, hydrogen,
                  one of the components of\nwater, can be derived from it. What
                  is most amazing is that all of these citations,\nscientiﬁc
                  statements, and notions had been proven to be in perfect
                  agreement withscience and our modern-day scientiﬁc discoveries
                  that were not known to man1,500 years ago.\nThis understanding
                  of the use of water in providing energy in the form
                  of\nhydrogen adds a new dimension to our scientiﬁc thinking
                  that life on earth depends
                </v-card-text>
                <v-card-text>
                  <a href="#">Algae-Chatbot/978-3-319-17031-2.pdf</a>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text="Close Dialog"
                    @click="isActive.value = false"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>

        <div class="d-flex flex-column mt-3">
          <div>Rate this answer:</div>
          <v-rating
            hover
            v-model="rating"
            class="m-0 p-0"
            size="small"
            color="orange-lighten-1"
            :readonly="readonly"
          ></v-rating>
        </div>
      </div>
    </div>

    <div class="mb-4 mt-auto w-100">
      <v-text-field
        :loading="loading"
        v-model="chatInput"
        density="compact"
        variant="solo"
        label="Message Algaefessor"
        append-inner-icon="mdi-chat"
        single-line
        hide-details
        @click:append-inner="onSend"
        v-on:keyup.enter="onSend"
      ></v-text-field>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
    loading: false,
    chatInput: "",
    rating: 0,
    readonly: false,
  }),

  methods: {
    onSend() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
      this.chatInput = "";
    },
  },
};
</script>
<style scoped></style>

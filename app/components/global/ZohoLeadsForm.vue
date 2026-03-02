<script setup lang="ts">
import axios from 'axios'

const props = withDefaults(
  defineProps<{
    interest: string
    buttonSize?: string | number
  }>(),
  {
    buttonSize: 'default',
  }
)

const dialog = ref(false)
const formel = ref<HTMLFormElement>()
const formData = ref<FormData>()
const completed = ref(false)

const submit = async () => {
  formData.value = new FormData(formel.value)

  try {
    const { data } = await axios.post(
      'https://crm.zoho.com/crm/WebToLeadForm',
      formData.value
    )

    completed.value = true
  } catch (error) {
    alert('Something went wrong, try again later...')
  }
}
</script>

<template>
  <client-only>
    <v-dialog v-model="dialog" width="auto" max-width="800px">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" :size="buttonSize">
          <slot> I'm Interested! </slot>
        </v-btn>
      </template>

      <v-card>
        <form @submit.prevent="submit" ref="formel">
          <v-card-title> Oh, you're interested? </v-card-title>

          <v-card-text class="text-subtitle-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            necessitatibus natus repudiandae temporibus officiis non, illo
            blanditiis accusamus obcaecati praesentium tempore dolores molestias
            iusto fugiat et provident maiores debitis alias.
          </v-card-text>

          <v-card-text
            v-if="completed"
            class="text-h4 font-weight-thin text-center py-16"
          >
            Thank you! We'll be in touch shortly!
          </v-card-text>

          <v-card-text v-else>
            <input
              type="hidden"
              name="xnQsjsdp"
              value="0c2eb1ceaacf8a4c9290b016fa5f632911f5a609c5b6bdf62251d5a982951e1c"
            />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input
              type="hidden"
              name="xmIwtLD"
              value="71de58591b6004fbe1ece3a525294212292058e537e64012fb5bbcdde6bda91b"
            />
            <input type="hidden" name="actionType" value="TGVhZHM=" />
            <!-- <input type="hidden" name="returnURL" value="/thanks" /> -->

            <input
              type="hidden"
              id="Lead_Source"
              name="Lead Source"
              value="Online&#x20;Store"
            />

            <!--  -->

            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  type="text"
                  id="First_Name"
                  name="First Name"
                  label="First Name"
                  placeholder="First Name"
                  maxlength="40"
                  required
                  hide-details
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  type="text"
                  id="Last_Name"
                  name="Last Name"
                  label="Last Name"
                  placeholder="Last Name"
                  required
                  hide-details
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  type="email"
                  id="Email"
                  name="Email"
                  label="Email"
                  placeholder="Email"
                  maxlength="100"
                  required
                  hide-details
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  type="text"
                  id="Phone"
                  name="Phone"
                  label="Phone"
                  placeholder="Phone"
                  maxlength="30"
                  hide-details
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  type="text"
                  readonly
                  disabled
                  id="LEADCF1"
                  name="LEADCF1"
                  label="Interest"
                  :model-value="interest"
                  :value="interest"
                  hide-details
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="grey" @click="dialog = false" variant="flat"
              >Close</v-btn
            >
            <v-btn
              v-if="!completed"
              color="primary"
              type="Submit"
              variant="flat"
              >Submit</v-btn
            >
            <!-- <button type="reset">Reset</button> -->
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </client-only>
</template>

<template>
  <div class="container overflow-x-auto">
    <div class="inline-block min-w-full shadow rounded-lg overflow-scroll">
      <table class="max-w-full lg:max-w-none min-w-full leading-normal">
        <thead>
          <tr>
            <th
              v-for="(val, idx) in headers"
              :key="`header${idx}`"
              class="th hidden lg:table-cell"
              :class="val.headerClass"
            >
              {{ val.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in items"
            :key="`tr${idx}`"
            class="
              flex
              lg:table-row
              flex-row
              lg:flex-row
              flex-wrap
              lg:flex-no-wrap
              mb-10
              lg:mb-0
            "
          >
            <td
              v-for="(header, headerIdx) in headers"
              :key="`td${headerIdx}`"
              class="td"
              :class="header.columnClass"
            >
              <span
                class="
                  lg:hidden
                  absolute
                  top-0
                  left-0
                  bg-blue-200
                  px-2
                  py-1
                  text-xs
                  font-bold
                  uppercase
                "
              >
                {{ headers[headerIdx].label }}
              </span>
              <p class="text-gray-900">
                <slot :name="`cell(${header.key})`" :item="item">
                  {{ item[header.key] }}
                </slot>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component
export default class TemTable extends Vue {
  @Prop({
    type: Array,
    default: () => {
      return [];
    },
  })
  private items!: any[];

  @Prop({
    type: Array,
    default: () => {
      return [];
    },
  })
  private headers!: any[];
}
</script>

<style scoped>
.th {
  padding: 0.75rem 1.25rem;
  border-bottom-width: 2px;
  border-color: theme("colors.gray.200");
  background-color: theme("colors.gray.100");
  text-align: center;
  font-weight: 600;
  font-size: 0.75rem;
  color: theme("colors.gray.600");
  letter-spacing: 0.025em;
}
.td {
  padding: 1rem;
  width: 100%;
  border-bottom-width: 1px;
  border-color: theme("colors.gray.200");
  background-color: white;
  font-size: 0.875rem;
  display: block;
  position: relative;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
}
@media (max-width: 1024px) {
  .td {
    max-width: 100vw;
  }
}
@media (min-width: 1024px) {
  .td {
    display: table-cell;
    position: static;
    width: auto;
  }
}
</style>

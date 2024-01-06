import React from "react";

function TableMobile({ head, body }) {
  return (
    <div className="border rounded p-4 grid divide-y gap-y-4">
      {body.map((items, key) => (
        <section className="pt-4 first:pt-0 geid gap-y-2">
          {items.map((item, key) => (
            <div className="text-sm flex items-center gap-x-6">
              <h6 className="min-w-[65px] text-xs font-semibold text-gray-500">
                {head[key].name}
              </h6>
              {Array.isArray(item) ? (
                <div className="flex gap-x-2.5">{item}</div>
              ) : (
                item
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default TableMobile;

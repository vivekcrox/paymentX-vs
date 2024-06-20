
export function InputBox({label, placeholder, onChange}) {
    return <div>
      <div className={'xl:text-sm font-medium text-left py-2 min-[400px]:text-base  min-[320px]:text-sm min-[280px]:text-xs'}>
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} className={'w-full px-2 py-1 border rounded  bg-green-50  min-[400px]:text-base  min-[320px]:text-sm min-[280px]:text-xs'}/>
    </div>
  }
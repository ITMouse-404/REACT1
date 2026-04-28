export default function TestimonialCard({quote,name,tittle,avatar}) {
  return (
    <div className="mx-auto w-full max-w-[400px] border border-gray-700 rounded-lg p-6 bg-[#1a1a1a] text-white mt-10">
      <p className="text-lg italic mb-6">
        &quot; {quote} &quot;
      </p>
      <div className="flex items-center space-x-3">
        <img 
          className="h-10 w-10 rounded-full object-cover"
          src={avatar} 
          alt={name}
        />
        <div className="text-left">
          <div className="font-bold text-sm text-white">{name}</div>
          <div className="text-xs text-gray-400">{tittle}</div>
        </div>
      </div>
    </div>
  );
}
// export default dùng để xuất mặc định 1 biến
// default ko quan trọng tên khi import (cái hay của default)
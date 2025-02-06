import React from "react";
import { X, CheckCircle, Lock, Play } from "lucide-react";
import Link from "next/link";
import { LearningPath } from "@/types/constants";

interface LearningPathModalProps {
  learningPath: LearningPath;
  onClose: () => void;
}

export const LearningPathModal: React.FC<LearningPathModalProps> = ({ learningPath, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="flex max-h-[80vh] w-full max-w-2xl flex-col rounded-xl bg-white">
        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{learningPath.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{learningPath.description}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            {learningPath.videos.map((video, index) => (
              <Link href={`/video/${video.title}`} key={index}>
                <div
                  className={`rounded-lg border p-4 ${
                    video.isLocked ? "cursor-not-allowed bg-gray-50" : "cursor-pointer hover:bg-blue-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {video.isCompleted ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : video.isLocked ? (
                        <Lock className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Play className="h-5 w-5 text-blue-600" />
                      )}
                      <div>
                        <h4 className={`font-medium ${video.isLocked ? "text-gray-400" : "text-gray-800"}`}>
                          {video.title}
                        </h4>
                        <p className="text-sm text-gray-500">{video.duration}</p>
                      </div>
                    </div>
                    {video.isLocked && <span className="text-sm text-gray-400">Selesaikan video sebelumnya</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-xl border-t bg-gray-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Progress Learning Path</p>
              <p className="font-medium text-gray-800">{learningPath.progress}% Selesai</p>
            </div>
            <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700">
              Lanjutkan Belajar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
